import { Catalog } from "../components/Catalog";
import { useAppSelector } from "../app/hooks";
import { ItemTitle } from "../types/ItemTitle";

interface Props {
  option: string;
  title: ItemTitle;
}

export const ItemsPage: React.FC<Props> = ({ option, title }) => {
  const items = useAppSelector((state) => state.items.items);

  const filterProducts = items.filter((item) => item.category === option);

  return <Catalog items={filterProducts} title={title} />;
};
