import { Phones } from "../components/Phones/Phones";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemsCarousel";
import { useAppSelector } from "../app/hooks";

export const HomePage = () => {
  const OFFER_TITLE_NEW = "Brand new models";
  const OFFER_TITLE_HOT_PRICE = "Hot prices";

  const startVisiblePhones = useAppSelector((state) => state.items.items);

  return (
    <>
      <ItemsCarousel
        titleName={OFFER_TITLE_NEW}
        startVisiblePhones={startVisiblePhones}
      />

      <Phones />

      <ItemsCarousel
        titleName={OFFER_TITLE_HOT_PRICE}
        startVisiblePhones={startVisiblePhones}
      />
    </>
  );
};
