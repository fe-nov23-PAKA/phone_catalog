import { useAppSelector } from "../app/hooks";
import { ItemDescription } from "../components/ItemDescriptionSlider/ItemDescriptionSlider";
import { AboutSection } from "../components/AboutSection";

export const ItemCard = () => {
  const items = useAppSelector((state) => state.items.items);

  return (
    <>
      {items.length > 0 && <ItemDescription item={items[0]} allItems={items} />}
      <AboutSection item={items[0]} />
    </>
  );
};
