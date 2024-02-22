import classNames from "classnames";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
        "flex flex-col bg-white",
        { "h-screen": isMenuOpen },
        { "border-b": !isMenuOpen },
      )}
    >
      <div className="flex shrink-0 items-center justify-between pl-4 sm:pr-0">
        <div className="flex items-center">
          <NavLink to="/" className="py-4">
            {isMenuOpen ? <Logo /> : <Logo fill="#F447AF" />}
          </NavLink>
          <nav
            className="hidden items-center gap-x-8 font-mont font-extrabold 
          tracking-wider sm:ml-8 sm:flex xl:ml-12 xl:gap-x-16"
          >
            <NavLinkMenu
              to="/"
              classname="py-[24px] text-xs font-extrabold uppercase text-secondary sm:hover:text-primary transition-all"
            >
              Home
            </NavLinkMenu>
            {NAV_LIST.map((nav_item) => (
              <NavLinkMenu
                key={nav_item}
                to={`/${nav_item.toLowerCase()}`}
                classname="py-[24px] text-xs font-extrabold uppercase text-secondary sm:hover:text-primary transition-all"
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
          <Link
            to="favourites"
            className=" transition-all hover:bg-hover-color sm:border-l sm:p-6"
          >
            <div className="relative">
              <Favourites />
              <ChosenItemsIcon
                count={favouriteItems.length}
                classname="bottom-2 left-2"
              />
            </div>
          </Link>
          <Link
            to="cart"
            className=" transition-all hover:bg-hover-color sm:border-x sm:p-6"
          >
            <div className="relative">
              <ShoppingBag />
              <ChosenItemsIcon
                count={cartItems.length}
                classname="bottom-2 left-2"
              />
            </div>
          </Link>
        </div>
        <button
          type="button"
          className="block border-l px-[17px] py-[21px] text-secondary focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && <BurgerMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};
