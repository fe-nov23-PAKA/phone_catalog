import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useAppSelector } from "../../../app/hooks";
import { ChosenItemsIcon } from "../../../icons/Chosen-Items-Icon";
import { Favourites } from "../../../icons/Favourites";
import { ShoppingBag } from "../../../icons/Shopping-Bag";
import { NAV_LIST } from "../../../variables";
import { NavLinkMenu } from "../NavLinkMenu";

interface Props {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const favouriteItems = useAppSelector((state) => state.favourites);
  const cartItems = useAppSelector((state) => state.cart);
  const theme = useAppSelector((state) => state.theme);

  return (
    <div
      className="left-0 flex h-full w-full flex-col justify-between 
    overflow-hidden border-t bg-white transition-all dark:border-dark-elements dark:bg-dark-black"
    >
      <ul
        className="mt-6 flex flex-grow flex-col 
          items-center space-y-4 overflow-auto tracking-wider"
      >
        <li>
          <NavLinkMenu
            onClick={() => setIsMenuOpen(false)}
            to="/"
            classname="text-xs font-extrabold uppercase text-secondary relative"
          >
            Home
          </NavLinkMenu>
        </li>
        {NAV_LIST.map((navItem) => (
          <li>
            <NavLinkMenu
              onClick={() => setIsMenuOpen(false)}
              to={`/${navItem.toLowerCase()}`}
              classname="text-xs font-extrabold uppercase text-secondary relative"
            >
              {navItem}
            </NavLinkMenu>
          </li>
        ))}
      </ul>
      <div className="sticky flex">
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="favourites"
          className={({ isActive }) =>
            classNames(
              "relative flex w-1/2 items-center justify-center border-r border-t py-6 transition-all dark:border-dark-elements",
              {
                "after:content[] transition-all after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary dark:after:bg-dark-white":
                  isActive,
              },
            )
          }
        >
          <div className="relative">
            {!!favouriteItems.length && (
              <ChosenItemsIcon
                classname="bottom-2 left-2"
                count={favouriteItems.length}
              />
            )}
            <Favourites fill={theme === "dark" ? "#F1F2F9" : ""} />
          </div>
        </NavLink>
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="cart"
          className={({ isActive }) =>
            classNames(
              "relative flex w-1/2 items-center justify-center border-r border-t py-6 transition-all dark:border-dark-elements",
              {
                "after:content[] transition-all after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary dark:after:bg-dark-white":
                  isActive,
              },
            )
          }
        >
          <div className="relative">
            {!!cartItems.length && (
              <ChosenItemsIcon
                classname="bottom-2 left-2"
                count={cartItems.length}
              />
            )}
            <ShoppingBag fill={theme === "dark" ? "#F1F2F9" : ""} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
