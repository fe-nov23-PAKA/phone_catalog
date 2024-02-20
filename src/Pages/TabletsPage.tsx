import { useEffect, useState } from "react";
import { Item } from "../types/Item";
import { getData } from "../utils/getData";
import { Catalog } from "../components/Catalog";

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Item[]>([]);

  useEffect(() => {
    getData("tablets").then(setTablets);
  }, []);

  return <Catalog items={tablets} />;
};
