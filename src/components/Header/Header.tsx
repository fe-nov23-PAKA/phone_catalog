import classNames from "classnames";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../icons/Logo";
import { Close } from "../../icons/Close";
import { Menu } from "../../icons/Menu";
import { ShoppingBag } from "../../icons/Shopping-Bag";
import { BurgerMenu } from "../UI/BurgerMenu";
import { Favourites } from "../../icons/Favourites";
import { NavLinkMenu } from "../UI/NavLinkMenu";
import { NAV_LIST } from "../../variables";
import { ChosenItemsIcon } from "../../icons/Chosen-Items-Icon";
import { useAppSelector } from "../../app/hooks";
import { DarkThemeToggler } from "../UI/DarkThemeToggler/DarkThemeToggler";
import "./HoverNav.scss";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const favouriteItems = useAppSelector((state) => state.favourites);
  const cartItems = useAppSelector((state) => state.cart);
  const theme = useAppSelector((state) => state.theme);

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
        "sticky top-0 z-[2] flex flex-col bg-white transition-all dark:bg-dark-black",
        { "h-screen": isMenuOpen },
        { "border-b dark:border-dark-elements": !isMenuOpen },
      )}
    >
      <div className="flex pl-4 sm:pr-0">
        <div className="flex items-center">
          <NavLink to="/" className="py-4">
            {isMenuOpen ? (
              <Logo fill={theme === "dark" ? "#F1F2F9" : ""} />
            ) : (
              <Logo fill={theme === "dark" ? "#F1F2F9" : "#F447AF"} />
            )}
          </NavLink>
          <nav
            className="xl:gap-x-15 hidden items-center font-mont 
          font-extrabold tracking-wider sm:ml-8 sm:flex sm:gap-x-4 md:gap-x-16 xl:ml-12"
          >
            <NavLinkMenu
              to="/"
              classname={classNames(
                "dark:text-dark-secondary hover text-xs/[31px] py-[15px] font-extrabold uppercase text-secondary dark:sm:hover:text-dark-white sm:hover:text-primary transition-all relative",
                { darkhover: theme === "dark" },
              )}
            >
              Home
            </NavLinkMenu>
            {NAV_LIST.map((nav_item) => (
              <NavLinkMenu
                key={nav_item}
                to={`/${nav_item.toLowerCase()}`}
                classname={classNames(
                  "dark:text-dark-secondary dark:sm:hover:text-dark-white hover text-xs/[31px] py-[15px] font-extrabold uppercase text-secondary sm:hover:text-primary transition-all relative",
                  { darkhover: theme === "dark" },
                )}
              >
                {nav_item}
              </NavLinkMenu>
            ))}
          </nav>
        </div>
        <DarkThemeToggler />
        <div
          className="hidden items-center
          sm:flex sm:border-secondary"
        >
          <NavLink
            to="favourites"
            className={({ isActive }) =>
              classNames(
                "relative transition-all hover:bg-hover-color dark:hover:bg-dark-surface2 sm:border-l sm:p-6 dark:sm:border-dark-elements",
                {
                  "after:content[] after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary dark:after:bg-dark-white":
                    isActive,
                },
              )
            }
          >
            <div className="relative">
              <Favourites fill={theme === "dark" ? "#F1F2F9" : ""} />
              {favouriteItems.length > 0 && (
                <ChosenItemsIcon
                  count={favouriteItems.length}
                  classname="bottom-2 left-2"
                />
              )}
            </div>
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              classNames(
                "relative transition-all hover:bg-hover-color dark:hover:bg-dark-surface2 sm:border-l sm:p-6 dark:sm:border-dark-elements",
                {
                  "after:content[] after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary dark:after:bg-dark-white":
                    isActive,
                },
              )
            }
          >
            <div className="relative">
              <ShoppingBag fill={theme === "dark" ? "#F1F2F9" : ""} />
              {cartItems.length > 0 && (
                <ChosenItemsIcon
                  count={cartItems.length}
                  classname="bottom-2 left-2"
                />
              )}
            </div>
          </NavLink>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="block border-l px-[17px] py-[21px] text-secondary transition-all focus:outline-none dark:border-dark-elements"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Close fill={theme === "dark" ? "#F1F2F9" : ""} />
            ) : (
              <Menu fill={theme === "dark" ? "#F1F2F9" : ""} />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && <BurgerMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};
