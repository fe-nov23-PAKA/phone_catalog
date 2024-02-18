/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import { Phone } from "../../types/Phone";
import { ProductCard } from "../ProductCard";
import arrow_down from "../../assets/img/icons/arrow-down.svg";
import arrow_up from "../../assets/img/icons/arrow-up.svg";
import arrow_left_black from "../../assets/img/icons/arrow-left-black.svg";
import arrow_right_black from "../../assets/img/icons/arrow-right-black.svg";
import arrow_right from "../../assets/img/icons/arrow-right.svg";
import home from "../../assets/img/icons/home-page.svg";
import { ArrowDown } from "../../assets/img/icons/Arrow-Down";

export const Catalog = () => {
  const [visiblePhones, setVisiblePhones] = useState<Phone[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState("16");
  const [sortField, setSortField] = useState("Less expensive");
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);

  const itemsOnPageList = ["16", "24", "32", "64"];
  const sortFields = ["Less expensive", "More expensive"];

  useEffect(() => {
    getData().then((phones) => {
      setVisiblePhones(phones);
    });
  }, [visiblePhones]);

  const handleSortDropDownClick = () => {
    setIsSortDropDownShown((currentValue) => !currentValue);
    if (!isItemsDropDownShown) {
      setIsItemsDropDownShown(true);
    }
  };

  const handleItemsDropDownClick = () => {
    setIsItemsDropDownShown((currentValue) => !currentValue);
    if (!isSortDropDownShown) {
      setIsSortDropDownShown(true);
    }
  };

  const handleSortDropDownElementClick = (option: string) => {
    setIsSortDropDownShown(true);
    setSortField(option);
  };

  const handleItemsDropDownElementClick = (option: string) => {
    setIsItemsDropDownShown(true);
    setItemsOnPage(option);
  };

  return (
    <div className="container">
      <div className="">
        <div className="mb-7 flex gap-2">
          <a href="/" className="">
            <img src={home} alt="home_icon" />
          </a>
          <div>
            <img src={arrow_right} alt="" />
          </div>
          <a href="/" className="/[17px] flex font-semibold">
            Phones
          </a>
        </div>
        <h1 className="mb-2 text-4xl font-extrabold">Mobile phones</h1>
        <div className="mb-8 font-semibold text-secondary">95 models</div>
      </div>

      <div className="mb-6">
        <div
          className="grid grid-cols-4 justify-center
        justify-items-center gap-x-4 gap-y-10
        sm:mb-10 sm:grid-cols-12 lg:grid-cols-24"
        >
          <div
            className="relative col-span-2 mb-6 w-full
          text-left sm:col-span-4"
          >
            <div>
              <p className="mb-1 text-xs text-secondary">Sort by</p>
              <button
                type="button"
                className={classNames(
                  { "focus:ring-primary": !isSortDropDownShown },
                  { "hover:ring-secondary": isSortDropDownShown },
                  "inline-flex w-full items-center justify-between",
                  "rounded-md bg-white px-3 py-2 ",
                  "text-icons font-semibold",
                  "shadow-sm ring-1 ring-inset ring-icons-color",
                )}
                onClick={handleSortDropDownClick}
                id="menu-button"
              >
                {sortField}
                {isSortDropDownShown ? (
                  <ArrowDown />
                ) : (
                  <img src={arrow_up} alt="" />
                )}
              </button>
            </div>

            <div
              className={classNames(
                { hidden: isSortDropDownShown },
                "absolute left-0 z-10 mt-1 text-secondary",
                "w-full origin-top-right rounded-md bg-white ",
                "shadow-lg ring-1 ring-black ring-opacity-5",
                "focus:outline-none",
              )}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                {sortFields.map((field) => (
                  <a
                    href="#/"
                    className="text-secondary-primary block
                  px-4 py-2  hover:rounded-lg 
                  hover:bg-hover-color hover:text-primary"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={() => handleSortDropDownElementClick(field)}
                  >
                    {field}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative col-span-2 mb-6 
        w-full text-left sm:col-span-3"
          >
            <div>
              <p className="mb-1  text-xs text-secondary">Items on page</p>
              <button
                type="button"
                className={classNames(
                  { "focus:ring-primary": !isItemsDropDownShown },
                  { "hover:ring-secondary": isItemsDropDownShown },
                  "inline-flex w-full items-center justify-between",
                  "rounded-md bg-white px-3 py-2 ",
                  "text-icons font-semibold",
                  "shadow-sm ring-1 ring-inset ring-icons-color",
                )}
                onClick={handleItemsDropDownClick}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {itemsOnPage}
                {isItemsDropDownShown ? (
                  <img src={arrow_down} alt="arrow_down-icon" />
                ) : (
                  <img src={arrow_up} alt="arrow_up-icon" />
                )}
              </button>
            </div>

            <div
              className={classNames(
                { hidden: isItemsDropDownShown },
                "absolute left-0 z-10 mt-1 text-secondary",
                "w-full origin-top-right rounded-md bg-white ",
                "shadow-lg ring-1 ring-black ring-opacity-5 ",
                "focus:outline-none",
              )}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                {itemsOnPageList.map((quantity) => (
                  <a
                    href="#/"
                    className="block px-4 py-2 
                   hover:rounded-lg 
                  hover:bg-hover-color hover:text-primary"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={() => handleItemsDropDownElementClick(quantity)}
                  >
                    {quantity}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul
          className="col-span-full mb-6 grid 
          grid-cols-4 justify-items-center 
          gap-x-4 gap-y-10 sm:grid-cols-12 md:mb-10 xl:grid-cols-24"
        >
          {visiblePhones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </ul>
      </div>

      <ul
        className="mb-16 flex items-center 
      justify-center space-x-1 font-light md:mb-20"
      >
        <li
          className="font-mont rounded-full border 
        border-gray-300 bg-white text-primary 
         hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            <img src={arrow_left_black} alt="" />
          </a>
        </li>
        <li
          className="rounded-full border border-primary bg-primary 
        text-white  
        hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            1
          </a>
        </li>
        <li
          className="font-mont rounded-full border
        border-gray-300 bg-white
        text-primary 
        hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            2
          </a>
        </li>
        <li
          className="font-mont rounded-full border 
        border-gray-300 bg-white 
        text-primary  
        hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            3
          </a>
        </li>
        <li
          className="font-mont rounded-full border 
        border-gray-300 bg-white 
        text-primary  
        hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            4
          </a>
        </li>
        <li
          className="font-mont rounded-full border 
        border-gray-300 bg-white 
        text-primary  
        hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            5
          </a>
        </li>
        <li
          className="font-mont rounded-full border 
        border-gray-300 bg-white 
        text-primary  
        hover:border-primary hover:bg-white hover:text-primary"
        >
          <a href="#/" className="flex h-8 w-8 items-center justify-center">
            <img src={arrow_right_black} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
