import classNames from "classnames";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ItemDescriptionType } from "../../types/ItemDescriptionType";
import { AddToCartButton } from "../UI/AddToCartButton";
import { Item } from "../../types/Item";
import "swiper/css";
import { AddToFavouritesButton } from "../UI/AddToFavouritesButton";
import { CardLoader } from "../UI/Loader/CardLoader/CardLoader";

interface Props {
  shortInfoItem: Item;
  item: ItemDescriptionType;
  allItems: ItemDescriptionType[];
}

export const ItemDescription: React.FC<Props> = ({
  item,
  allItems,
  shortInfoItem,
}) => {
  const [currentColor, setCurrentColor] = useState(item.color);
  const [currentCapacity, setCurrentCapacity] = useState(item.capacity);
  const [currentItem, setCurrentItem] = useState(item);
  const [isLoading, setIsLoading] = useState(true);

  const swiperRef = useRef<SwiperRef>(null);

  const pagination = {
    bulletClass: "border border-element-color dark:border-dark-elements",
    bulletActiveClass: "ring-1 ring-primary dark:ring-dark-white",
    clickable: true,
    el: ".swiper_pagination",
    renderBullet(index: number, className: string) {
      const image = currentItem.images[index];

      return `<div class="${className} shrink rounded-lg xl:max-h-[80px] xl:max-w-[80px] max-h-[50px] max-w-[50px] p-[3.5px] flex items-center flex-grow"><img src="${image}" 
      alt="phone_image" class="h-full w-full object-contain" /></div>`;
    },
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timerId);
  }, [currentColor]);

  const {
    capacityAvailable,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    screen,
    ram,
    resolution,
    processor,
  } = currentItem;

  const findItem = () => {
    if (currentCapacity && currentColor) {
      const futureItem = allItems.find(
        (itemMap) =>
          itemMap.capacity === currentCapacity &&
          itemMap.color === currentColor &&
          itemMap.namespaceId === currentItem.namespaceId,
      );

      return futureItem as ItemDescriptionType;
    }

    return currentItem;
  };

  useEffect(() => {
    const newCurrentItem = findItem();

    setCurrentItem(newCurrentItem);
  }, [currentColor, currentCapacity]);

  const handleColorChange = (
    phoneColor: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setCurrentColor(phoneColor);
    setIsLoading(true);
  };

  const handleCapacityChange = (
    capacityMap: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setCurrentCapacity(capacityMap);
  };

  const anotherColors: { [key: string]: string } = {
    midnightgreen: "#004953",
    spacegray: "#717378",
    rosegold: "#B76E79",
    spaceblack: "#505150",
    midnight: "#000E34",
    sierrablue: "#69ABCE",
    graphite: "#41424C",
  };

  return (
    <div className="mb-14 grid grid-cols-4 gap-4 pt-4 sm:mb-16 sm:grid-cols-12 xl:mb-20 xl:grid-cols-24">
      <h2 className="dark:text-dark-white col-span-full mb-8 text-[32px]/[41px] font-extrabold tracking-[0.01em] sm:mb-10">
        {currentItem.name}
      </h2>
      <div className="relative col-span-full min-h-[400px] sm:col-span-7 sm:flex sm:flex-row-reverse xl:col-span-12">
        {isLoading ? (
          <CardLoader />
        ) : (
          <>
            <Swiper
              ref={swiperRef}
              key={currentItem.images[0]}
              pagination={pagination}
              modules={[Pagination]}
              className="sm:max-m-[450px] sm:w-[445px]"
              spaceBetween={100}
            >
              {currentItem.images.map((image) => (
                <SwiperSlide key={image}>
                  <img
                    src={image}
                    alt="phone_image"
                    className="mx-auto aspect-square h-full max-h-[290px] w-full max-w-[290px] object-contain sm:max-h-[350px] sm:max-w-[350px] xl:max-h-[445px] xl:max-w-[445px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper_pagination mb-10 mt-4 flex justify-center gap-2 sm:mb-0 sm:mr-4 sm:mt-0 sm:flex-col sm:justify-normal xl:justify-between xl:gap-4" />
          </>
        )}
      </div>
      <div className="col-span-full flex flex-col gap-[37.5px] sm:col-span-5 xl:col-start-[14] xl:col-end-[-1]">
        <div className="dark:border-dark-elements justify-between border-b-[1px] pb-[24px]">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="dark:text-dark-secondary text-[12px] font-bold leading-[15px] text-secondary">
                Available colors
              </span>
              <span className="dark:text-dark-icons text-[12px] font-bold leading-[15px] text-icons-color">
                {`ID: ${shortInfoItem.id}`}
              </span>
            </div>
            <div className="flex gap-2">
              {colorsAvailable.map((itemColor) => {
                let color = itemColor;

                if (itemColor.split(" ").length === 2) {
                  color = itemColor.replace(" ", "");
                }

                if (color in anotherColors) {
                  color = anotherColors[color];
                }

                return (
                  <button
                    disabled={currentColor === itemColor}
                    key={itemColor}
                    onClick={(event) => handleColorChange(itemColor, event)}
                    type="button"
                    className={classNames(
                      `dark:border-dark-black dark:ring-dark-elements dark:hover:ring-dark-white h-[30px] w-[30px] rounded-full border-[2px] border-white ring-1 ring-icons-color
                      transition hover:ring-1 hover:ring-primary bg-${itemColor}`,
                      {
                        "dark:ring-dark-white ring-primary":
                          currentColor === itemColor,
                      },
                    )}
                    style={{ backgroundColor: color }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="dark:border-dark-elements flex flex-col gap-2 border-b-[1px] pb-[24px] text-[12px] font-bold leading-[15px] text-secondary">
          <span>Select capacity</span>
          <div className="flex gap-2">
            {capacityAvailable.map((capacityMap) => (
              <button
                key={capacityMap}
                type="button"
                className={classNames(
                  "dark:border-dark-icons dark:hover:border-dark-white h-[32px] rounded-[4px] border border-element-color px-2 text-sm leading-[21px] transition hover:border-primary",
                  {
                    "dark:bg-dark-white dark:border-dark-white dark:text-dark-black bg-primary text-white":
                      capacityMap === currentCapacity,
                  },
                )}
                onClick={(event) => handleCapacityChange(capacityMap, event)}
              >
                {capacityMap}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="justify-flex-start mb-2 flex items-center">
            <span className="dark:text-dark-white text-[32px]/[41px] font-extrabold leading-8">
              ${priceDiscount}
            </span>
            <span
              className="
          dark:text-dark-secondary ml-2 text-[22px]/[28.12px]
          font-semibold text-secondary
          line-through"
            >
              ${priceRegular}
            </span>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <AddToCartButton item={shortInfoItem} />
            <AddToFavouritesButton item={shortInfoItem} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-gray-elem dark:text-dark-secondary text-[12px] font-bold text-secondary">
              Screen
            </div>
            <div className="dark:text-dark-white text-[12px] font-bold">
              {screen}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem dark:text-dark-secondary text-[12px] font-bold text-secondary"
            >
              Resolution
            </div>
            <div className="dark:text-dark-white text-[12px] font-bold">
              {resolution}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem dark:text-dark-secondary text-[12px] font-bold text-secondary"
            >
              Processor
            </div>
            <div className="dark:text-dark-white text-[12px] font-bold">
              {processor}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem dark:text-dark-secondary text-[12px] font-bold text-secondary"
            >
              RAM
            </div>
            <div className="dark:text-dark-white text-xs font-bold">{ram}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
