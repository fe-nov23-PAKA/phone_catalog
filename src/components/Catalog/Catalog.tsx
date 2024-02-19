import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import { Phone } from "../../types/Phone";
import { ProductCard } from "../ProductCard";
import { HomePageIcon } from "../../icons/HomePageIcon";
import { ArrowRight } from "../../icons/Arrow-Right";
import { ArrowUp } from "../../icons/Arrow-Up";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { scrollToTop } from "../../utils/scrollToTop";
import { setShowItems } from "../../utils/setShowItems";
import { ArrowDown } from "../../icons/Arrow-Down";

export const Catalog = () => {
  const [startVisiblePhones, setStartVisiblePhones] = useState<Phone[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState(16);
  const [sortField, setSortField] = useState("Less expensive");
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);
  const [page, setPage] = useState(1);

  const itemsOnPageList = [16, 24, 32, 64];
  const sortFields = ["Less expensive", "More expensive"];

  useEffect(() => {
    getData().then((phones) => {
      setStartVisiblePhones(phones);
    });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [page]);

  const allItemsCount = startVisiblePhones.length;

  const itemPages = Math.ceil(startVisiblePhones.length / itemsOnPage);
  const itemsPagesMap: number[] = [];

  for (let i = 1; i <= itemPages; i += 1) {
    itemsPagesMap.push(i);
  }

  const handleSetPage = useCallback(
    (
      number: number,
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
      event?.preventDefault();
      if (number !== page) {
        setPage(number);
      }
    },
    [page],
  );

  const itemsOnPageEditor = setShowItems(
    itemsOnPage,
    page,
    itemsPagesMap,
    startVisiblePhones,
  );

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

  const handleSortDropDownElementClick = (
    option: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsSortDropDownShown(true);
    setSortField(option);
  };

  const handleItemsDropDownElementClick = (
    option: number,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsItemsDropDownShown(true);
    setItemsOnPage(option);
  };

  return (
    <div className="container mt-6">
      <div>
        <div className="mb-7 flex gap-2">
          <a href="/">
            <HomePageIcon />
          </a>
          <ArrowRight fill="#B4BDC3" />
          <a href="/" className="flex text-base/[17px] font-semibold">
            Phones
          </a>
        </div>
        <h1 className="mb-2 text-4xl font-extrabold">Mobile phones</h1>
        <div className="mb-8  font-semibold text-secondary">
          {allItemsCount} models
        </div>
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
                  "rounded-md px-3 py-2 ",
                  "font-semibold text-primary",
                  "shadow-sm ring-1 ring-inset ring-icons-color",
                )}
                onClick={handleSortDropDownClick}
                id="menu-button"
              >
                {sortField}
                {isSortDropDownShown ? <ArrowDown /> : <ArrowUp />}
              </button>
            </div>

            <div
              className={classNames(
                { hidden: isSortDropDownShown },
                "absolute left-0 z-10 mt-1 text-secondary",
                "w-full origin-top-right rounded-md",
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
                    key={field}
                    href="#/"
                    className="block bg-white
                    px-4 py-2 hover:rounded-lg
                  hover:bg-hover-color hover:text-primary"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={(event) => {
                      handleSortDropDownElementClick(field, event);
                    }}
                  >
                    {field}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative col-span-2 mb-6 w-full text-left sm:col-span-3">
            <div>
              <p className="mb-1  text-xs text-secondary">Items on page</p>
              <button
                type="button"
                className={classNames(
                  { "focus:ring-primary": !isItemsDropDownShown },
                  { "hover:ring-secondary": isItemsDropDownShown },
                  "inline-flex w-full items-center justify-between",
                  "rounded-md px-3 py-2 ",
                  "font-semibold text-primary",
                  "shadow-sm ring-1 ring-inset ring-icons-color",
                )}
                onClick={handleItemsDropDownClick}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {itemsOnPage}
                {isItemsDropDownShown ? <ArrowDown /> : <ArrowUp />}
              </button>
            </div>

            <div
              className={classNames(
                { hidden: isItemsDropDownShown },
                "absolute left-0 z-10 mt-1 text-secondary",
                "w-full origin-top-right rounded-md bg-white",
                "shadow-lg ring-1 ring-primary ring-opacity-5 ",
                "focus:outline-none",
              )}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                {itemsOnPageList.map((quantity) => (
                  <a
                    key={quantity}
                    href="#/"
                    className="block bg-white px-4 
                   py-2 last:rounded-lg hover:rounded-lg
                  hover:bg-hover-color hover:text-primary"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={(event) => {
                      handleItemsDropDownElementClick(quantity, event);
                      setPage(1);
                    }}
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
          {itemsOnPageEditor.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </ul>
      </div>

      <ul
        className="mb-16 flex items-center 
      justify-center space-x-1 font-light md:mb-20"
      >
        <li
          className={classNames(
            "font-mont rounded-full border",
            { disabled: page === 1 },
            { "hover:border-primary": !(page === 1) },
          )}
        >
          <a
            onClick={(event) => {
              if (page !== 1) {
                event.preventDefault();
                setPage((currentPage) => currentPage - 1);
              }
            }}
            style={{ pointerEvents: page === 1 ? "none" : "auto" }}
            href="#/"
            className="flex h-8 w-8 items-center justify-center"
          >
            <ArrowLeft fill="#0F0F11" />
          </a>
        </li>
        {itemsPagesMap.map((number) => (
          <li
            key={number}
            className={classNames(
              "font-mont rounded-full border text-primary duration-300 hover:border-primary",
              {
                "border-primary bg-primary text-white hover:bg-white hover:text-primary":
                  page === number,
              },
            )}
          >
            <a
              onClick={(event) => handleSetPage(number, event)}
              href="#/"
              className="flex h-8 w-8 items-center justify-center"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={classNames(
            "font-mont rounded-full border",
            { disabled: page === itemPages },
            { "hover:border-primary": !(page === itemPages) },
          )}
        >
          <a
            href="#/"
            className="flex h-8 w-8 items-center justify-center"
            onClick={(event) => {
              if (page !== itemPages) {
                event.preventDefault();
                setPage((currentPage) => currentPage + 1);
              }
            }}
            style={{ pointerEvents: page === itemPages ? "none" : "auto" }}
          >
            <ArrowRight fill="#0F0F11" />
          </a>
        </li>
      </ul>
    </div>
  );
};
