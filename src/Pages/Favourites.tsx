import { useAppSelector } from "../app/hooks";
import { ProductCard } from "../components/ProductCard";
import { ArrowRight } from "../icons/Arrow-Right";
import { HomePageIcon } from "../icons/HomePageIcon";

export const Favourites = () => {
  const favouriteItems = useAppSelector((state) => state.favourites);

  const countFavouritesItems = favouriteItems.length;

  return (
    <div className="favourites container">
      <div className="mb-[32px] flex flex-col gap-2 pt-[24px] sm:mb-[40px]">
        <div className="mb-[24px] flex flex-row items-center gap-2">
          <HomePageIcon />
          <ArrowRight />
          <span className="text-xs font-bold text-secondary">Favourites</span>
        </div>
        <span className="mb-[8px] text-favourites-sm font-extrabold tracking-[-0.01em] text-primary md:text-favourites-base">
          Favourites
        </span>
        <span className="text-sm font-semibold text-secondary">{`${countFavouritesItems} items`}</span>
      </div>
      {!!countFavouritesItems && (
        <ul
          className="col-span-full mb-6 grid 
          grid-cols-4 justify-items-center 
          gap-x-4 gap-y-10 sm:grid-cols-12 md:mb-10 xl:grid-cols-24"
        >
          {favouriteItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};
