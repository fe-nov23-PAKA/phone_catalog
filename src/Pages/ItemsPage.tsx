import { useEffect } from "react";
import { Catalog } from "../components/Catalog";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as itemsSlice from "../features/ItemsSlice";

export const ItemsPage = ({ option }: { option: string }) => {
  const items = useAppSelector((state) => state.items.items);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(itemsSlice.init(option));
  }, [option]);

  return <Catalog items={items} title={option} />;
};
