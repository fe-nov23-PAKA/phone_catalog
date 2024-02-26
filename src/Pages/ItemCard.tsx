import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { ItemDescription } from "../components/ItemDescriptionSlider/ItemDescriptionSlider";
import { AboutSection } from "../components/AboutSection";
import { getData } from "../utils/getData";
import { ItemDescriptionType } from "../types/ItemDescriptionType";
import { Item } from "../types/Item";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { Loader } from "../components/UI/Loader/CardLoader/Loader";

export const ItemCard = () => {
  const { items } = useAppSelector((state) => state.items);
  const [productsList, setProductsList] = useState<ItemDescriptionType[]>([]);
  const { slug } = useParams();
  const choosedItem = items.find((item) => item.itemId === slug) as Item;

  useEffect(() => {
    getData(choosedItem?.category as string).then(setProductsList);
  }, [choosedItem]);

  const fullChoosedCard = () =>
    productsList.find((product) => product.id === slug) as ItemDescriptionType;

  return (
    <div className="container pt-6">
      {productsList.length > 0 ? (
        <>
          <Breadcrumbs />
          <ItemDescription
            item={fullChoosedCard()}
            allItems={productsList}
            shortInfoItem={choosedItem}
          />
          <AboutSection item={fullChoosedCard()} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
