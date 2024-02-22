import { useEffect } from "react";
import { Phones } from "../components/Phones/Phones";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemsCarousel";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as itemsSlice from "../features/ItemsSlice";

export const HomePage = () => {
  const OFFER_TITLE_NEW = "Brand new models";
  const OFFER_TITLE_HOT_PRICE = "Hot prices";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(itemsSlice.init("phones"));
  }, []);

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
