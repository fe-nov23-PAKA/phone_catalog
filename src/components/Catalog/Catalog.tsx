/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { ArrowRight } from "../../icons/Arrow-Right";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { scrollToTop } from "../../utils/scrollToTop";
import { setShowItems } from "../../utils/setShowItems";
import { DropDownMenu } from "../UI/DropDownMenu";
import { Item } from "../../types/Item";
import { Breadcrumbs } from "../UI/Breadcrumbs";
import { Loader } from "../UI/Loader/CardLoader/Loader";
import { sortedItems } from "../../utils/sortedItems";
import { debouncedSetSearchWith } from "../../utils/setSearchWith";
import { useAppSelector } from "../../app/hooks";
import { PaginationStart } from "../PaginationStart/PaginationStart";
import { PaginationMiddle } from "../PaginationMiddle/PaginationMiddle";
import { PaginationEnd } from "../PaginationEnd/PaginationEnd";

interface Props {
  items: Item[];
  title: string;
}

export const Catalog: React.FC<Props> = ({ items, title }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);
  const sortField = searchParams.get("sort") || "newest";
  const page = searchParams.get("page") || "1";
  const itemsOnPage = searchParams.get("perPage") || "16";
  const query = searchParams.get("query") || "";
  const [queryFilter, setQueryFilter] = useState(query);

  const itemsOnPageList = ["16", "24", "32", "64"];
  const sortFields = ["cheapest", "newest", "alphabetically"];
  const theme = useAppSelector((state) => state.theme);

  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (sortField === "newest" && itemsOnPage === "16") {
      const defaultSearchParams = new URLSearchParams({
        sort: "newest",
        perPage: "16",
      });

      setSearchParams(defaultSearchParams);
    }
  }, [items]);

  useEffect(() => {
    scrollToTop();
  }, [page]);

  const handleSetPage = (
    number: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event?.preventDefault();
    if (number !== "1") {
      params.set("page", number);
      setSearchParams(params.toString());
    } else {
      params.delete("page");
      setSearchParams(params.toString());
    }
  };

  const handleSetQueryParams = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryValue = event.target.value.trim().toLowerCase();

    setQueryFilter(event.target.value);
    debouncedSetSearchWith(
      searchParams,
      { query: queryValue || null },
      setSearchParams,
    );
  };

  const handleSortDropDownClick = () => {
    setIsSortDropDownShown((currentValue) => !currentValue);
  };

  const handleItemsDropDownClick = () => {
    setIsItemsDropDownShown((currentValue) => !currentValue);
  };

  const handleSortDropDownElementClick = (
    option: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsSortDropDownShown(true);
    params.delete("page");
    params.set("sort", option.toLowerCase());
    setSearchParams(params);
  };

  const handleItemsDropDownElementClick = (
    option: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsItemsDropDownShown(true);
    params.set("perPage", option);
    setSearchParams(params);

    params.delete("page");

    setSearchParams(params);
  };

  const sortedProducts = sortedItems(items, sortField, query);

  const itemsPagesMap: string[] = [];

  const itemsOnPageEditor = setShowItems(
    itemsOnPage,
    page,
    itemsPagesMap,
    sortedProducts,
  );

  const itemPages = Math.ceil(sortedProducts.length / +itemsOnPage);

  for (let i = 1; i <= itemPages; i += 1) {
    itemsPagesMap.push(i.toString());
  }

  return (
    <>
      {items.length <= 0 ? (
        <Loader />
      ) : (
        <div className="container pt-6">
          <div>
            <div className="flex items-center gap-2">
              <Breadcrumbs />
            </div>
            <h1 className="mb-2 text-[32px]/[41px] font-extrabold transition-all dark:text-dark-white sm:text-[48px]/[56px]">
              {title}
            </h1>
            <div className="mb-8 font-semibold text-secondary transition-all dark:text-dark-secondary">
              {items.length} models
            </div>
          </div>

          <div className="pb-6">
            <div
              className="mb-6 grid grid-cols-4
        justify-center justify-items-center gap-x-4
        gap-y-10 sm:grid-cols-12 xl:grid-cols-24"
            >
              <DropDownMenu
                classname="sm:col-span-4"
                label="Sort by"
                dropDownField={sortField}
                dropDownFields={sortFields}
                isOpen={isSortDropDownShown}
                setIsOpen={setIsSortDropDownShown}
                handlerToOpen={handleSortDropDownClick}
                handlerOnClick={handleSortDropDownElementClick}
              />

              <DropDownMenu
                classname="sm:col-span-3"
                label="Items on page"
                dropDownField={itemsOnPage}
                dropDownFields={itemsOnPageList}
                isOpen={isItemsDropDownShown}
                setIsOpen={setIsItemsDropDownShown}
                handlerToOpen={handleItemsDropDownClick}
                handlerOnClick={handleItemsDropDownElementClick}
              />

              <div className="col-span-4 w-full sm:col-start-9 sm:col-end-[-1] xl:col-start-[17]">
                <label className="block">
                  <span className="mb-1 block text-xs font-bold tracking-wider text-secondary after:ml-0.5 dark:text-dark-secondary">
                    Looking for something?
                  </span>
                  <input
                    type="search"
                    name="search"
                    className="block min-h-10 w-full 
                    rounded-md border border-slate-300 
                    bg-white px-3 py-2 placeholder-slate-400 shadow-sm transition-all
                    focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:rounded-none dark:border-dark-black
                    dark:bg-dark-surface2 dark:text-dark-white dark:ring-dark-surface2 dark:hover:ring-dark-icons dark:focus:ring-dark-accent
                    sm:text-sm"
                    placeholder="Type here"
                    onChange={handleSetQueryParams}
                    value={queryFilter}
                  />
                </label>
              </div>
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
                  "rounded-full border transition-all dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2",
                  {
                    "disabled dark:!border-dark-elements dark:!bg-dark-black":
                      page === "1",
                  },
                  {
                    "hover:border-primary dark:hover:border-dark-icons dark:hover:bg-dark-icons":
                      !(page === "1"),
                  },
                )}
              >
                <button
                  disabled={page === "1"}
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();

                    if (+page - 1 !== 1) {
                      params.set("page", `${+page - 1}`);
                      setSearchParams(params);
                    } else {
                      params.delete("page");
                      setSearchParams(params);
                    }
                  }}
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <ArrowLeft
                    fill={
                      page === "1" && theme === "dark"
                        ? "#4A4D58"
                        : page === "1"
                          ? "#B4BDC3"
                          : theme === "dark"
                            ? "#F1F2F9"
                            : "#0F0F11"
                    }
                  />
                </button>
              </li>
              {+page <= 2 && itemsPagesMap.length > 2 && (
                <PaginationStart
                  itemsPagesMap={itemsPagesMap}
                  page={page}
                  handleSetPage={handleSetPage}
                  sortField={sortField}
                  itemsOnPage={itemsOnPage}
                />
              )}
              {+page >= 3 &&
                +page <= itemsPagesMap.length - 2 &&
                itemsPagesMap.length > 2 && (
                <PaginationMiddle
                  itemsPagesMap={itemsPagesMap}
                  page={page}
                  handleSetPage={handleSetPage}
                  sortField={sortField}
                  itemsOnPage={itemsOnPage}
                />
              )}
              {+page >= itemsPagesMap.length - 1 && (
                <PaginationEnd
                  itemsPagesMap={itemsPagesMap}
                  page={page}
                  handleSetPage={handleSetPage}
                  sortField={sortField}
                  itemsOnPage={itemsOnPage}
                />
              )}

              <li
                className={classNames(
                  "rounded-full border transition-all dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2",
                  {
                    "disabled dark:!border-dark-elements dark:!bg-dark-black":
                      +page === itemPages,
                  },
                  {
                    "hover:border-primary dark:hover:border-dark-icons dark:hover:bg-dark-icons":
                      !(+page === itemPages),
                  },
                )}
              >
                <button
                  disabled={+page === itemPages}
                  type="button"
                  className="flex h-8 w-8 items-center justify-center"
                  onClick={(event) => {
                    event.preventDefault();

                    params.set("page", `${+page + 1}`);
                    setSearchParams(params);
                  }}
                >
                  <ArrowRight
                    fill={
                      +page === itemPages && theme === "dark"
                        ? "#4A4D58"
                        : +page === itemPages
                          ? "#B4BDC3"
                          : theme === "dark"
                            ? "#F1F2F9"
                            : "#0F0F11"
                    }
                  />
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};
