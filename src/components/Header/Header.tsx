/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from "classnames";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/img/Logo";
import { Favorites } from "../../assets/img/icons/Favourites";
import { ShoppingBag } from "../../assets/img/icons/Shopping-Bag";
import { Close } from "../../assets/img/icons/Close";
import { Menu } from "../../assets/img/icons/Menu";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={classNames(
        "flex flex-col bg-white sm:mb-8 xl:mb-14",
        { "h-screen": isMenuOpen },
        { "mb-6 border-b": !isMenuOpen },
      )}
    >
      <div className="h-custom flex shrink-0 items-center justify-between px-4 sm:pr-0">
        <div className="flex items-center">
          <a href="#Home" className="py-4">
            <Logo fill={isMenuOpen ? "#0F0F11" : "#F447AF"} />
          </a>
          <nav className="font-mont hidden items-center gap-x-8 font-extrabold tracking-wider sm:ml-8 sm:flex xl:ml-12 xl:gap-x-16">
            <a
              href="#Home"
              className="py-[18.5px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Home
            </a>
            <NavLink
              to="/catalog"
              className="relative py-[18.5px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Phones
            </NavLink>
            <a
              href="#Tablets"
              className="py-[18.5px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Tablets
            </a>
            <a
              href="#Accessories"
              className="relative py-[18.5px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Accessories
            </a>
          </nav>
        </div>
        <div
          className="hidden items-center 
          sm:flex sm:border-secondary"
        >
          <button
            type="button"
            className=" hover:bg-hover-color sm:border-l sm:p-6"
          >
            <Favorites />
          </button>
          <button
            type="button"
            className=" hover:bg-hover-color sm:border-x sm:p-6"
          >
            <ShoppingBag />
          </button>
        </div>
        <button
          type="button"
          className="block text-secondary focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="left-0 flex h-full w-full flex-col justify-between overflow-hidden border-t bg-white">
          <ul
            className="mt-6 flex flex-grow flex-col 
          items-center space-y-4 overflow-auto tracking-wider"
          >
            <li>
              <a
                href="#Home"
                className="text-xs font-extrabold uppercase text-secondary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Phones"
                className="text-xs font-extrabold uppercase text-secondary"
              >
                Phones
              </a>
            </li>
            <li>
              <a
                href="#Tablets"
                className="text-xs font-extrabold uppercase text-secondary"
              >
                Tablets
              </a>
            </li>
            <li>
              <a
                href="#Accessories"
                className="text-xs font-extrabold uppercase text-secondary"
              >
                Accessories
              </a>
            </li>
          </ul>
          <div className="sticky flex">
            <button
              type="button"
              className="flex w-1/2 justify-center border-r border-t py-6"
            >
              <Favorites />
            </button>
            <button
              type="button"
              className="flex w-1/2 justify-center border-t py-6"
            >
              <ShoppingBag />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
