/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import { getData } from "../../utils/getData";
import { Phone } from "../../types/Phone";
import { ProductCard } from "../ProductCard";

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
    <div className={`${styles.grid_template} mx-4 sm:mx-6 mb-16 xl:mb-20`}>
      <div
        className={`${styles.test} col-start-1 col-end-3 sm:col-start-1 sm:col-end-5`}
      >
        <div>
          <p className="mb-1 font-mont font-monttext-secondary text-xs">
            Sort by
          </p>
          <button
            type="button"
            className={classNames(
              { "focus:ring-primary": !isSortDropDownShown },
              { "hover:ring-secondary": isSortDropDownShown },
              styles.dropdown,
            )}
            onClick={handleSortDropDownClick}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {sortField}
            {isSortDropDownShown ? (
              <img src="../../../public/img/icons/arrow-down.svg" alt="" />
            ) : (
              <img src="../../../public/img/icons/arrow-up.svg" alt="" />
            )}
          </button>
        </div>

        <div
          className={classNames(
            { hidden: isSortDropDownShown },
            styles.dropdown_options,
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {sortFields.map((field) => (
              <a
                href="#/"
                className="text-secondary-primary block
                  px-4 py-2 text-sm hover:bg-hover-color 
                  hover:rounded-lg hover:text-primary"
                role="menuitem"
                tabIndex={-1}
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
        className={`${styles.test} col-start-3 col-end-5 sm:col-start-5 sm:col-end-8`}
      >
        <div>
          <p className="mb-1 font-mont text-secondary-primary text-xs">
            Items on page
          </p>
          <button
            type="button"
            className={classNames(
              { "focus:ring-primary": !isItemsDropDownShown },
              { "hover:ring-secondary": isItemsDropDownShown },
              styles.dropdown,
            )}
            onClick={handleItemsDropDownClick}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {itemsOnPage}
            {isItemsDropDownShown ? (
              <img src="../../../public/img/icons/arrow-down.svg" alt="" />
            ) : (
              <img src="../../../public/img/icons/arrow-up.svg" alt="" />
            )}
          </button>
        </div>

        <div
          className={classNames(
            { hidden: isItemsDropDownShown },
            styles.dropdown_options,
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {itemsOnPageList.map((quantity) => (
              <a
                href="#/"
                className="block px-4 py-2 
                  text-sm hover:bg-hover-color 
                  hover:rounded-lg hover:text-primary"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
                onClick={() => handleItemsDropDownElementClick(quantity)}
              >
                {quantity}
              </a>
            ))}
          </div>
        </div>
      </div>

      <ul
        className={`${styles.grid_template} 
        col-span-full justify-items-center mb-6 md:mb-10 gap-y-10`}
      >
        {visiblePhones.map((phone) => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </ul>

      <ul className="flex items-center space-x-1 font-light">
        <li className={styles.pagination_default_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            <img src="../public/img/icons/arrow-left-black.svg" alt="" />
          </a>
        </li>
        <li className={styles.pagination_active_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            1
          </a>
        </li>
        <li className={styles.pagination_default_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            2
          </a>
        </li>
        <li className={styles.pagination_default_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            3
          </a>
        </li>
        <li className={styles.pagination_default_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            4
          </a>
        </li>
        <li className={styles.pagination_default_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            5
          </a>
        </li>
        <li className={styles.pagination_default_button}>
          <a href="#/" className="w-8 h-8 flex items-center justify-center">
            <img src="../public/img/icons/arrow-right-black.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
