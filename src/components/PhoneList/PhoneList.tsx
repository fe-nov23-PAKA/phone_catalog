/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./PhoneList.module.scss";
import { getData } from "../../utils/getData";
import { Phone } from "../../types/Phone";

export const PhoneList = () => {
  const [visiblePhones, setVisiblePhones] = useState<Phone[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState("16");
  const [sortField, setSortField] = useState("Less expensive");
  const [isSortDropDownShown, setIsSortDropDownShown] = useState(true);
  const [isItemsDropDownShown, setIsItemsDropDownShown] = useState(true);

  const itemsOnPageList = ["8", "16", "24", "32"];
  const sortFields = ["Less expensive", "More expensive"];

  useEffect(() => {
    getData().then((phones) => {
      setVisiblePhones(phones);
    });
  }, [visiblePhones]);

  const handleSortDropDownClick = () => {
    setIsSortDropDownShown((currentValue) => !currentValue);
  };

  const handleItemsDropDownClick = () => {
    setIsItemsDropDownShown((currentValue) => !currentValue);
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
    <>
      <div className="flex gap-x-4 justify-center md:justify-start mx-4">
        <div className="relative w-full text-left md:max-w-48">
          <div>
            <p className="mb-1 font-monttext-secondary-primary text-xs">
              Sort by
            </p>
            <button
              type="button"
              className={classNames(
                { "ring-primary": !isSortDropDownShown },
                { "hover:ring-secondary-primary": isSortDropDownShown },
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
        <div className="relative w-full text-left md:max-w-48">
          <div>
            <p className="mb-1 font-mont text-secondary-primary text-xs">
              Items on page
            </p>
            <button
              type="button"
              className={classNames(
                { "ring-primary": !isItemsDropDownShown },
                { "hover:ring-secondary-primary": isItemsDropDownShown },
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
                  className="text-secondary-primary block px-4 py-2 
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
      </div>

      {visiblePhones.map((phone) => (
        <p>{phone.name}</p>
      ))}

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
    </>
  );
};
