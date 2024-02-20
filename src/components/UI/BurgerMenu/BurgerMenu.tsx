import { ChosenItemsIcon } from "../../../icons/Chosen-Items-Icon";
import { Favourites } from "../../../icons/Favourites";
import { ShoppingBag } from "../../../icons/Shopping-Bag";
import { NAV_LIST } from "../../../variables";
import { NavLinkMenu } from "../NavLinkMenu";

interface Props {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({ setIsMenuOpen }) => (
  <div className="left-0 flex h-full w-full flex-col justify-between overflow-hidden border-t bg-white">
    <ul
      className="mt-6 flex flex-grow flex-col 
          items-center space-y-4 overflow-auto tracking-wider"
    >
      {NAV_LIST.map((navItem) => (
        <li>
          <NavLinkMenu
            onClick={() => setIsMenuOpen(false)}
            to={`/${navItem.toLowerCase()}`}
            classname="text-xs font-extrabold uppercase text-secondary"
          >
            {navItem}
          </NavLinkMenu>
        </li>
      ))}
    </ul>
    <div className="sticky flex">
      <button
        type="button"
        className="flex w-1/2 items-center justify-center border-r border-t py-6"
      >
        <Favourites />
      </button>
      <button
        type="button"
        className="flex w-1/2 items-center justify-center border-t py-6"
      >
        <div className="relative">
          <ChosenItemsIcon classname="bottom-2 left-2" />
          <ShoppingBag />
        </div>
      </button>
    </div>
  </div>
);
