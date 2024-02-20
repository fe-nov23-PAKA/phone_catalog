import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AboutSection } from "../components/UI/AboutSection";
import { getData } from "../utils/getData";
import { Item } from "../types/Item";

export const ItemCard = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { phoneID } = useParams();

  const foundItem = () => {
    return items.find((item) => item.id === phoneID);
  };

  useEffect(() => {
    getData("phones").then(setItems);
  }, [phoneID]);

  return (
    <div className="itempage">
      <AboutSection item={foundItem() as Item} />
    </div>
  );
};
