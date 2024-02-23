import classNames from "classnames";
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { HomePageIcon } from "../../icons/HomePageIcon";
import { ArrowRight } from "../../icons/Arrow-Right";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { scrollToTop } from "../../utils/scrollToTop";
import { setShowItems } from "../../utils/setShowItems";
import { DropDownMenu } from "../UI/DropDownMenu";
import { Item } from "../../types/Item";

interface Props {
  items: Item[];
  title: string;
}

export const Catalog: React.FC<Props> = ({ items, title }) => {
  const [itemsOnPage, setItemsOnPage] = useState("16");
  const [sortField, setSortField] = useState("Cheapest");
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);
  const [page, setPage] = useState("1");

  const itemsOnPageList = ["16", "24", "32", "64"];
  const sortFields = ["Cheapest", "Expensive"];

  useEffect(() => {
    scrollToTop();
  }, [page]);

  const itemPages = Math.ceil(items.length / +itemsOnPage);
  const itemsPagesMap: string[] = [];

  for (let i = 1; i <= itemPages; i += 1) {
    itemsPagesMap.push(i.toString());
  }

  const handleSetPage = (
    number: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event?.preventDefault();
    if (number !== page) {
      setPage(number);
    }
  };

  const itemsOnPageEditor = setShowItems(
    itemsOnPage,
    page,
    itemsPagesMap,
    items,
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
    option: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsItemsDropDownShown(true);
    setItemsOnPage(option);
    setPage("1");
  };

  return (
    <div className="container pt-6">
      <div>
        <div className="mb-7 flex gap-2">
          <a href="/">
            <HomePageIcon />
          </a>
          <ArrowRight fill="#B4BDC3" />
          <a href="/" className="flex text-sm/[17px] font-semibold capitalize">
            {title}
          </a>
        </div>
        <h1 className="mb-2 text-4xl font-extrabold">{title}</h1>
        <div className="mb-8  font-semibold text-secondary">
          {items.length} models
        </div>
      </div>

      <div className="pb-6">
        <div
          className="grid grid-cols-4 justify-center
        justify-items-center gap-x-4 gap-y-10
        sm:mb-10 sm:grid-cols-12 lg:grid-cols-24"
        >
          <DropDownMenu
            classname="sm:col-span-4"
            label="Sort by"
            dropDownField={sortField}
            dropDownFields={sortFields}
            isOpen={isSortDropDownShown}
            handlerToOpen={handleSortDropDownClick}
            handlerOnClick={handleSortDropDownElementClick}
          />

          <DropDownMenu
            classname="sm:col-span-3"
            label="Items on page"
            dropDownField={itemsOnPage}
            dropDownFields={itemsOnPageList}
            isOpen={isItemsDropDownShown}
            handlerToOpen={handleItemsDropDownClick}
            handlerOnClick={handleItemsDropDownElementClick}
          />
        </div>

        <ul
          className={classNames(
            "col-span-full mb-6 grid",
            "grid-cols-4 justify-items-center",
            "gap-x-4 gap-y-10 sm:grid-cols-12 md:mb-10 xl:grid-cols-24",
            { "mb-0 pb-6 md:mb-0 md:pb-10": !(itemsPagesMap.length > 1) },
          )}
        >
          {itemsOnPageEditor.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>
      </div>

      {itemsPagesMap.length > 1 && (
        <ul
          className="flex items-center justify-center 
      space-x-1 pb-16 font-light md:pb-20"
        >
          <li
            className={classNames(
              "rounded-full border font-mont transition-all",
              { disabled: page === "1" },
              { "hover:border-primary": !(page === "1") },
            )}
          >
            <button
              disabled={page === "1"}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setPage((currentPage) => (+currentPage - 1).toString());
              }}
              style={{ pointerEvents: page === "1" ? "none" : "auto" }}
              className="flex h-8 w-8 items-center justify-center"
            >
              <ArrowLeft fill={page === "1" ? "#B4BDC3" : "#0F0F11"} />
            </button>
          </li>
          {itemsPagesMap.map((number) => (
            <li
              key={number}
              className={classNames(
                "rounded-full border font-mont text-primary transition-all hover:border-primary",
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
              "rounded-full border font-mont transition-all",
              { disabled: +page === itemPages },
              { "hover:border-primary": !(+page === itemPages) },
            )}
          >
            <button
              disabled={+page === itemPages}
              type="button"
              className="flex h-8 w-8 items-center justify-center"
              onClick={(event) => {
                event.preventDefault();
                setPage((currentPage) => (+currentPage + 1).toString());
              }}
              style={{ pointerEvents: +page === itemPages ? "none" : "auto" }}
            >
              <ArrowRight fill={+page === itemPages ? "#B4BDC3" : "#0F0F11"} />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
