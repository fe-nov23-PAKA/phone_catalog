import imgEmptyFavourites from "../assets/img/empty-favourites-3.png";
import { useAppSelector } from "../app/hooks";
import { ProductCard } from "../components/ProductCard";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";

export const Favourites = () => {
  const favouriteItems = useAppSelector((state) => state.favourites);

  const countFavouritesItems = favouriteItems.length;

  return (
    <div className="container">
      <div className="mb-[32px] flex flex-col gap-2 pt-[24px] sm:mb-[40px]">
        <Breadcrumbs />
        <span className="dark:text-dark-white mb-[8px] text-[32px]/[41px] font-extrabold tracking-[-0.01em] text-primary transition-all sm:text-[48px]/[56px]">
          Favourites
        </span>
        {!!countFavouritesItems && (
          <span className="text-sm font-semibold text-secondary dark:text-dark-secondary">{`${countFavouritesItems === 1 ? `${countFavouritesItems} item` : `${countFavouritesItems} items`}`}</span>
        )}
      </div>
      {countFavouritesItems ? (
        <ul
          className="col-span-full grid 
          grid-cols-4 justify-items-center 
          gap-x-4 gap-y-10 pb-14 sm:grid-cols-12 sm:pb-20 xl:grid-cols-24"
        >
          {favouriteItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="mt-[15vh]">
          <img
            className="ml-auto mr-auto"
            src={imgEmptyFavourites}
            alt="Empty cart"
          />
        </div>
      )}
    </div>
  );
};
