import { useTranslation } from "react-i18next";
import { Carousel } from "../components/Carousel/Carousel";
import { Phones } from "../components/Phones/Phones";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemsCarousel";
import { useAppSelector } from "../app/hooks";
import { Loader } from "../components/UI/Loader/CardLoader/Loader";
// import { SortType } from "../types/SortType";

export const HomePage = () => {
  // const OFFER_TITLE_NEW = SortType.HOT;
  // const OFFER_TITLE_HOT_PRICE = SortType.NEW;

  const { items, loading, error } = useAppSelector((state) => state.items);
  const { t } = useTranslation();

  return (
    <>
      <h1 className="hidden">Product Catalog</h1>
      {error && <div>Error</div>}
      {loading && <Loader />}

      {!loading && !error && (
        <div className="container">
          <h2 className="py-6 text-left text-[32px]/[41px] font-extrabold transition-all dark:text-dark-white sm:py-8 xl:py-14">
            {t("home-title")}
          </h2>
          <div className="mx-auto max-w-[1232px] sm:px-[74px] xl:px-[82px]">
            <Carousel />
          </div>
          <ItemsCarousel
            titleName={t("BrandNew-title")}
            startVisibleItems={items}
          />

          <Phones />

          <ItemsCarousel
            titleName={t("Category-title")}
            startVisibleItems={items}
          />
        </div>
      )}
    </>
  );
};
