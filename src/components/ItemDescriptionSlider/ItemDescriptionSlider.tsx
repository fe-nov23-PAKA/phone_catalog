import classNames from "classnames";
import AOS from "aos";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ItemDescriptionType } from "../../types/ItemDescriptionType";
import { AddToCartButton } from "../UI/AddToCartButton";
import { Item } from "../../types/Item";
import "swiper/css";
import { AddToFavouritesButton } from "../UI/AddToFavouritesButton";
import { ItemDescriptionSkeleton } from "../ItemDescriptionSkeleton";
import { ItemSliderSkeleton } from "../ItemSliderSkeleton";
import "aos/dist/aos.css";

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
  const [isColorLoading, setIsColorLoading] = useState(true);
  const { t } = useTranslation();

  const swiperRef = useRef<SwiperRef>(null);

  const navigate = useNavigate();

  const pagination = {
    bulletClass: "border border-element-color dark:border-dark-elements",
    bulletActiveClass: "ring-1 ring-primary dark:ring-dark-white",
    clickable: true,
    el: ".swiper_pagination",
    renderBullet(index: number, className: string) {
      const image = currentItem.images[index];

      return `<div class="${className} shrink rounded-lg xl:max-h-[80px] xl:max-w-[80px] max-h-[50px] max-w-[50px] p-[3.5px] transition-all flex items-center flex-grow"><img src="${image}" 
      alt="phone_image" class="h-full w-full object-contain" /></div>`;
    },
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsColorLoading(false);
    }, 800);

    return () => clearTimeout(timerId);
  }, [currentColor]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timerId);
  }, []);

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
    setIsColorLoading(true);
    navigate(
      `../${item.namespaceId}-${currentCapacity.toLowerCase()}-${phoneColor.toLowerCase()}`,
    );
  };

  const handleCapacityChange = (
    capacityMap: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setCurrentCapacity(capacityMap);
    navigate(
      `../${item.namespaceId}-${capacityMap.toLowerCase()}-${currentColor}`,
    );
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

  useEffect(() => {
    AOS.init();
  }, []);

  return isLoading ? (
    <ItemDescriptionSkeleton />
  ) : (
    <div className="mb-14 grid grid-cols-4 gap-4 pt-4 sm:mb-16 sm:grid-cols-12 xl:mb-20 xl:grid-cols-24">
      {isColorLoading ? (
        <ItemSliderSkeleton />
      ) : (
        <>
          <h2 className="col-span-full mb-8 text-[32px]/[41px] font-extrabold tracking-[0.01em] transition-all dark:text-dark-white sm:mb-10">
            {currentItem.name}
          </h2>
          <div className="relative col-span-full min-h-[400px] sm:col-span-7 sm:flex sm:flex-row-reverse xl:col-span-12">
            <>
              <Swiper
                ref={swiperRef}
                key={currentItem.images[0]}
                pagination={pagination}
                modules={[Pagination]}
                className="sm:w-[445px] sm:max-w-[450px]"
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
              <div className="swiper_pagination mb-10 mt-4 flex justify-center gap-2 sm:mb-0 sm:mr-4 sm:mt-0 sm:flex-col sm:justify-normal xl:justify-start xl:gap-4" />
            </>
          </div>
        </>
      )}

      <div
        data-aos="fade-left"
        className="col-span-full flex flex-col gap-[37.5px] sm:col-span-5 xl:col-start-[14] xl:col-end-[-1]"
      >
        <div className="justify-between border-b-[1px] pb-[24px] transition-all dark:border-dark-elements">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-[12px] font-bold leading-[15px] text-secondary transition-all dark:text-dark-secondary">
                {t("Available-colors")}
              </span>
              <span className="text-[12px] font-bold leading-[15px] text-icons-color transition-all dark:text-dark-icons">
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
                      `h-[30px] w-[30px] rounded-full border-[2px] border-white ring-1 ring-icons-color transition-all hover:ring-1 hover:ring-primary
                      dark:border-dark-black dark:ring-dark-elements dark:hover:ring-dark-white bg-${itemColor}`,
                      {
                        "ring-primary dark:ring-dark-white":
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
        <div className="flex flex-col gap-2 border-b-[1px] pb-[24px] text-[12px] font-bold leading-[15px] text-secondary transition-all dark:border-dark-elements">
          <span>{t("Select-capacity")}</span>
          <div className="flex gap-2">
            {capacityAvailable.map((capacityMap) => (
              <button
                key={capacityMap}
                type="button"
                className={classNames(
                  "h-[32px] rounded-[4px] border border-element-color px-2 text-sm leading-[21px] transition-all hover:border-primary dark:rounded-none dark:border-dark-icons dark:hover:border-dark-white",
                  {
                    "bg-primary text-white dark:border-dark-white dark:bg-dark-white dark:text-dark-black":
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
            <span className="text-[32px]/[41px] font-extrabold leading-8 transition-all dark:text-dark-white">
              ${priceDiscount}
            </span>
            <span
              className="
          ml-2 text-[22px]/[28.12px] font-semibold
          text-secondary line-through
          dark:text-dark-secondary"
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
            <div className="text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary">
              {t("Screen")}
            </div>
            <div className="text-[12px] font-bold dark:text-dark-white">
              {screen}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary"
            >
              {t("Resolution")}
            </div>
            <div className="text-[12px] font-bold dark:text-dark-white">
              {resolution}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary"
            >
              {t("Processor")}
            </div>
            <div className="text-[12px] font-bold transition-all dark:text-dark-white">
              {processor}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary"
            >
              {t("RAM")}
            </div>
            <div className="text-xs font-bold transition-all dark:text-dark-white">
              {ram}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
