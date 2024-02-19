import { Catalog } from "../components/Catalog";
import { Phone } from "../types/Phone";

interface Props {
  startVisiblePhones: Phone[];
}

export const CatalogPage: React.FC<Props> = ({ startVisiblePhones }) => {
  return <Catalog startVisiblePhones={startVisiblePhones} />;
};
