import { useEffect } from "react";
import { Carousel } from "../components/Carousel/Carousel";
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
      <h1 className="container py-6 text-left text-[32px]/[41px] font-extrabold sm:py-8 xl:py-14">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="mx-auto max-w-[1232px] sm:px-[74px] xl:px-[82px]">
        <Carousel />
      </div>
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
