import { useEffect } from "react";
import { Catalog } from "../components/Catalog";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as itemsSlice from "../features/ItemsSlice";
import { ItemTitle } from "../types/ItemTitle";

interface Props {
  option: string;
  title: ItemTitle;
}

export const ItemsPage: React.FC<Props> = ({ option, title }) => {
  const items = useAppSelector((state) => state.items.items);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(itemsSlice.init(option));
  }, [option]);

  return <Catalog items={items} title={title} />;
};
