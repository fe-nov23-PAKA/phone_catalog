import { useEffect, useState } from "react";
import { Catalog } from "../components/Catalog";
import { Item } from "../types/Item";
import { getData } from "../utils/getData";

export const ItemsPage = ({ option }: { option: string }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getData(option).then(setItems);
  }, [items]);

  return <Catalog items={items} />;
};
