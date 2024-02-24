import { Carousel } from "../components/Carousel/Carousel";
import { Phones } from "../components/Phones/Phones";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemsCarousel";
import { useAppSelector } from "../app/hooks";
import { Loader } from "../components/UI/Loader/Loader";
import { SortType } from "../types/SortType";

export const HomePage = () => {
  const OFFER_TITLE_NEW = SortType.HOT;
  const OFFER_TITLE_HOT_PRICE = SortType.NEW;

  const { items, loading, error } = useAppSelector((state) => state.items);

  return (
    <>
      {error && <div>Error</div>}
      {loading && <Loader />}

      {!loading && !error && (
        <>
          <h1 className="container py-6 text-left text-[32px]/[41px] font-extrabold sm:py-8 xl:py-14">
            Welcome to Nice Gadgets store!
          </h1>
          <div className="mx-auto max-w-[1232px] sm:px-[74px] xl:px-[82px]">
            <Carousel />
          </div>
          <ItemsCarousel
            titleName={OFFER_TITLE_NEW}
            startVisibleItems={items}
          />

          <Phones />

          <ItemsCarousel
            titleName={OFFER_TITLE_HOT_PRICE}
            startVisibleItems={items}
          />
        </>
      )}
    </>
  );
};
