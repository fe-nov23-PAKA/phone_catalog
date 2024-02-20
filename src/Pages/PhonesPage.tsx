import { useEffect, useState } from "react";
import { Catalog } from "../components/Catalog";
import { Item } from "../types/Item";
import { getData } from "../utils/getData";

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Item[]>([]);

  useEffect(() => {
    getData("phones").then(setPhones);
  }, []);

  return <Catalog items={phones} />;
};
