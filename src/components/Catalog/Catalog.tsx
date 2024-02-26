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

interface Props {
  items: Item[];
  title: string;
}

export const Catalog: React.FC<Props> = ({ items, title }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);
  const sortField = searchParams.get("sort") || "cheapest";
  const page = searchParams.get("page") || "1";
  const itemsOnPage = searchParams.get("perPage") || "16";
  const itemsOnPageList = ["16", "24", "32", "64"];
  const sortFields = ["cheapest", "expensive"];

  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (
      !searchParams.has("page") ||
      !searchParams.has("sort") ||
      !searchParams.has("perPage")
    ) {
      const defaultSearchParams = new URLSearchParams({
        sort: "cheapest",
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
    if (number !== page && number !== "1") {
      params.set("page", number);
      setSearchParams(params);
    } else {
      params.delete("page");
      setSearchParams(params);
    }
  };

  const handleSortDropDownElementClick = (
    option: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    params.set("sort", option.toLowerCase());
    setSearchParams(params);
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

  const handleItemsDropDownElementClick = (
    option: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsItemsDropDownShown(true);

    params.set("perPage", option);
    setSearchParams(params);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortField === "cheapest") {
      return a.price - b.price;
    }

    if (sortField === "expensive") {
      return b.price - a.price;
    }

    return 0;
  });

  const itemPages = Math.ceil(items.length / +itemsOnPage);
  const itemsPagesMap: string[] = [];

  for (let i = 1; i <= itemPages; i += 1) {
    itemsPagesMap.push(i.toString());
  }

  const itemsOnPageEditor = setShowItems(
    itemsOnPage,
    page,
    itemsPagesMap,
    sortedItems,
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
            <h1 className="dark:text-dark-white mb-2 text-[32px]/[41px] font-extrabold sm:text-[48px]/[56px]">
              {title}
            </h1>
            <div className="dark:text-dark-secondary  mb-8 font-semibold text-secondary">
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
                setIsFieldOpen={setIsSortDropDownShown}
              />

              <DropDownMenu
                classname="sm:col-span-3"
                label="Items on page"
                dropDownField={itemsOnPage}
                dropDownFields={itemsOnPageList}
                isOpen={isItemsDropDownShown}
                handlerToOpen={handleItemsDropDownClick}
                handlerOnClick={handleItemsDropDownElementClick}
                setIsFieldOpen={setIsItemsDropDownShown}
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
