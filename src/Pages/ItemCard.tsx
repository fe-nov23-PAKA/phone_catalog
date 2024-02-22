import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/getData";
import { Item } from "../types/Item";

export const ItemCard = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { phoneID } = useParams();

  useEffect(() => {
    getData("phones").then(setItems);
  }, []);

  return <div className="">Hello</div>;
};
