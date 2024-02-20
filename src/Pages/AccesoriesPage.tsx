/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { Item } from "../types/Item";
import { getData } from "../utils/getData";
import { Catalog } from "../components/Catalog";

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Item[]>([]);

  useEffect(() => {
    getData("accessories").then(setAccessories);
  }, []);

  return <Catalog items={accessories} />;
};
