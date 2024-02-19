import { useState } from "react";
import classNames from "classnames";
import { ArrowDown } from "../../icons/Arrow-Down";
import arrow_up from "../../icons/arrow-up.svg";

export const DropDown = () => {
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);

  const handleSortDropDownClick = () => {
    setIsSortDropDownShown((currentValue) => !currentValue);
    if (!isItemsDropDownShown) {
      setIsItemsDropDownShown(true);
    }
  };

  return (
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
          {/* {sortField} */}
          {isSortDropDownShown ? <ArrowDown /> : <img src={arrow_up} alt="" />}
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
          {/* {sortFields.map((field) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
};
