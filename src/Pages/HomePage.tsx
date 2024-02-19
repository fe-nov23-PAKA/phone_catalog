import React from "react";
import { Phone } from "../types/Phone";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemsCarousel";

interface Props {
  startVisiblePhones: Phone[];
}

export const HomePage: React.FC<Props> = ({ startVisiblePhones }) => {
  const OFFER_TITLE_NEW = "Brand new models";
  const OFFER_TITLE_HOT_PRICE = "Hot prices";

  return (
    <>
      <ItemsCarousel
        titleName={OFFER_TITLE_NEW}
        startVisiblePhones={startVisiblePhones}
      />

      <ItemsCarousel
        titleName={OFFER_TITLE_HOT_PRICE}
        startVisiblePhones={startVisiblePhones}
      />
    </>
  );
};
