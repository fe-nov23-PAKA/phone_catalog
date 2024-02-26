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
        "dark:bg-dark-black sticky top-0 z-[2] flex flex-col bg-white",
        { "h-screen": isMenuOpen },
        { "dark:border-dark-elements border-b": !isMenuOpen },
      )}
    >
      <div className="flex shrink-0 items-center justify-between pl-4 sm:pr-0">
        <div className="flex items-center">
          <NavLink to="/" className="py-4">
            {isMenuOpen ? (
              <Logo
                fill={localStorage.getItem("theme") === "dark" ? "#F1F2F9" : ""}
              />
            ) : (
              <Logo
                fill={
                  localStorage.getItem("theme") === "dark"
                    ? "#F1F2F9"
                    : "#F447AF"
                }
              />
            )}
          </NavLink>
          <nav
            className="hidden items-center gap-x-8 font-mont font-extrabold 
          tracking-wider sm:ml-8 sm:flex xl:ml-12 xl:gap-x-16"
          >
            <NavLinkMenu
              to="/"
              classname={classNames(
                "dark:text-dark-secondary hover text-xs/[31px] py-[15px] font-extrabold uppercase text-secondary dark:sm:hover:text-dark-white sm:hover:text-primary transition-all relative",
                { darkhover: localStorage.getItem("theme") === "dark" },
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
                  { darkhover: localStorage.getItem("theme") === "dark" },
                )}
              >
                {nav_item}
              </NavLinkMenu>
            ))}
          </nav>
        </div>
        <div
          className="hidden items-center 
          sm:flex sm:border-secondary"
        >
          <DarkThemeToggler />
          <NavLink
            to="favourites"
            className={({ isActive }) =>
              classNames(
                "dark:sm:border-dark-elements dark:hover:bg-dark-surface2 relative transition-all hover:bg-hover-color sm:border-l sm:p-6",
                {
                  "after:content[] after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary":
                    isActive,
                },
              )
            }
          >
            <div className="relative">
              <Favourites
                fill={localStorage.getItem("theme") === "dark" ? "#F1F2F9" : ""}
              />
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
                "dark:sm:border-dark-elements dark:hover:bg-dark-surface2 relative transition-all hover:bg-hover-color sm:border-l sm:p-6",
                {
                  "after:content[] after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary":
                    isActive,
                },
              )
            }
          >
            <div className="relative">
              <ShoppingBag
                fill={localStorage.getItem("theme") === "dark" ? "#F1F2F9" : ""}
              />
              {cartItems.length > 0 && (
                <ChosenItemsIcon
                  count={cartItems.length}
                  classname="bottom-2 left-2"
                />
              )}
            </div>
          </NavLink>
        </div>
        <button
          type="button"
          className="block dark:border-dark-elements border-l px-[17px] py-[21px] text-secondary focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <Close
              fill={localStorage.getItem("theme") === "dark" ? "#F1F2F9" : ""}
            />
          ) : (
            <Menu
              fill={localStorage.getItem("theme") === "dark" ? "#F1F2F9" : ""}
            />
          )}
        </button>
      </div>
      {isMenuOpen && <BurgerMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};
