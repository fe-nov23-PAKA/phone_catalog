import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { ItemDescription } from "../components/ItemDescriptionSlider/ItemDescriptionSlider";
import { AboutSection } from "../components/AboutSection";
import { getData } from "../utils/getData";
import { ItemDescriptionType } from "../types/ItemDescriptionType";

export const ItemCard = () => {
  const { items, error, loading } = useAppSelector((state) => state.items);
  const [productsList, setProductsList] = useState<ItemDescriptionType[]>([]);
  const { slug } = useParams();
  const choosedItemCategory = items.find((item) => item.itemId === slug)
    ?.category as string;

  useEffect(() => {
    getData(choosedItemCategory).then(setProductsList);
  }, [choosedItemCategory]);

  const fullChoosedCard = () =>
    productsList.find((product) => product.id === slug) as ItemDescriptionType;

  return (
    <>
      {loading && <div className="">Loader</div>}
      {error && <div className="">Error</div>}

      {!loading && !error && !!productsList.length && (
        <>
          <ItemDescription item={fullChoosedCard()} allItems={productsList} />
          <AboutSection item={fullChoosedCard()} />
        </>
      )}
    </>
  );
};
