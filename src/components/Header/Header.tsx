import classNames from "classnames";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";
import favourites from "../../assets/img/icons/favourites.svg";
import shopping_bag from "../../assets/img/icons/shopping-bag.svg";
import close from "../../assets/img/icons/close.svg";
import menu from "../../assets/img/icons/menu.svg";

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
        "flex flex-col bg-white",
        { "h-screen": isMenuOpen },
        { "border-b": !isMenuOpen },
      )}
    >
      <div className="h-custom flex shrink-0 items-center justify-between px-4 sm:pr-0">
        <div className="flex items-center">
          <a href="#Home" className="py-4">
            {isMenuOpen ? (
              <img src={logo} alt="Logo" className="h-8" />
            ) : (
              <img src={logo} alt="Logo" className="h-8 text-[#F447AF]" />
            )}
          </a>
          <nav className="font-mont hidden items-center gap-x-8 font-extrabold tracking-wider sm:ml-8 sm:flex xl:ml-12 xl:gap-x-16">
            <a
              href="#Home"
              className="py-[28px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Home
            </a>
            <NavLink
              to="/catalog"
              className="relative py-[28px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Phones
            </NavLink>
            <a
              href="#Tablets"
              className="py-[28px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
            >
              Tablets
            </a>
            <a
              href="#Accessories"
              className="relative py-[28px] text-xs font-extrabold uppercase text-secondary  sm:hover:text-primary"
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
            <img src={favourites} alt="Favorites" className="m-0 h-6 w-6 p-1" />
          </button>
          <button
            type="button"
            className=" hover:bg-hover-color sm:border-x sm:p-6"
          >
            <img src={shopping_bag} alt="Cart" className="m-0 h-6  w-6 p-1" />
          </button>
        </div>
        <button
          type="button"
          className="block text-secondary focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <img src={close} alt="Close Menu" className="h-6 w-6" />
          ) : (
            <img src={menu} alt="Open Menu" className="h-6 w-6" />
          )}
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
            <button type="button" className="w-1/2 border-r border-t py-6">
              <img
                src={favourites}
                alt="Favorites"
                className="mx-auto h-6 w-6 p-1"
              />
            </button>
            <button type="button" className="w-1/2 border-t py-6">
              <img
                src={shopping_bag}
                alt="Cart"
                className="mx-auto h-6 w-6 p-1"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
