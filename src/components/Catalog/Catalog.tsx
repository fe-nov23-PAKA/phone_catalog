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
import { setSearchWith } from "../../utils/setSearchWith";

interface Props {
  items: Item[];
  title: string;
}

export const Catalog: React.FC<Props> = ({ items, title }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);
  const sortField = searchParams.get("sort") || "Cheapest";
  const page = searchParams.get("page") || "1";
  const itemsOnPage = searchParams.get("perPage") || "16";
  const query = searchParams.get("query") || "";
  const [queryFilter, setQueryFilter] = useState(query);

  const itemsOnPageList = ["16", "24", "32", "64"];
  const sortFields = ["Cheapest", "Newest", "Alphabetically"];

  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (sortField === "Cheapest" && itemsOnPage === "16") {
      const defaultSearchParams = new URLSearchParams({
        perPage: "16",
        sort: "Cheapest",
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
    setSearchWith(searchParams, { query: queryValue || null }, setSearchParams);
  };

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

  const sortedProducts = sortedItems(items, sortField);

  const itemPages = Math.ceil(items.length / +itemsOnPage);
  const itemsPagesMap: string[] = [];

  for (let i = 1; i <= itemPages; i += 1) {
    itemsPagesMap.push(i.toString());
  }

  const itemsOnPageEditor = setShowItems(
    itemsOnPage,
    page,
    itemsPagesMap,
    sortedProducts,
    query,
  );

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
            <h1 className="mb-2 text-4xl font-extrabold">{title}</h1>
            <div className="mb-8 font-semibold text-secondary">
              {items.length} models
            </div>
          </div>

          <div className="pb-6">
            <div
              className="mb-6 grid grid-cols-4
        justify-center justify-items-center gap-x-4
        gap-y-10 sm:grid-cols-12 lg:grid-cols-24"
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

              <div className="sm:col-span-6">
                <label className="block">
                  <span className="after:text-red-500 block text-sm font-medium text-slate-700 after:ml-0.5">
                    Looking for something specific?
                  </span>
                  <input
                    type="search"
                    name="search"
                    className="block min-h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
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
                  <button
                    type="button"
                    onClick={(event) => handleSetPage(number, event)}
                    className="flex h-8 w-8 items-center justify-center"
                  >
                    {number}
                  </button>
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

                    params.set("page", `${+page + 1}`);
                    setSearchParams(params);
                  }}
                >
                  <ArrowRight
                    fill={+page === itemPages ? "#B4BDC3" : "#0F0F11"}
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
