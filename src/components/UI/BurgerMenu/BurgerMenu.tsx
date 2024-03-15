import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { ChosenItemsIcon } from '../../../icons/Chosen-Items-Icon';
import { Favourites } from '../../../icons/Favourites';
import { ShoppingBag } from '../../../icons/Shopping-Bag';
import { NAV_LIST } from '../../../variables';
import { NavLinkMenu } from '../NavLinkMenu';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isAuth: boolean;
  isLoginPage: boolean;
}

export const BurgerMenu: React.FC<Props> = ({
  setIsMenuOpen,
  isMenuOpen,
  isAuth,
  isLoginPage,
}) => {
  const favouriteItems = useAppSelector((state) => state.favourites);
  const cartItems = useAppSelector((state) => state.cart);
  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div
      className={classNames(
        'absolute bottom-0 top-full z-[50] flex h-0 w-full flex-col transition-all ease-in-out',
        'justify-between overflow-hidden border-t bg-white dark:border-dark-elements dark:bg-dark-black',
        { '!h-[calc(100vh-68px)]': isMenuOpen },
      )}
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
          <li key={navItem}>
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
      {isAuth ? (
        <div className="sticky flex">
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            to="favourites"
            className={({ isActive }) =>
              classNames(
                'relative flex w-1/2 items-center justify-center border-r border-t py-6 transition-all dark:border-dark-elements',
                {
                  'after:content[] transition-all after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary dark:after:bg-dark-white':
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
              <Favourites fill={theme === 'dark' ? '#F1F2F9' : ''} />
            </div>
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            to="cart"
            className={({ isActive }) =>
              classNames(
                'relative flex w-1/2 items-center justify-center border-r border-t py-6 transition-all dark:border-dark-elements',
                {
                  'after:content[] transition-all after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:scale-100 after:bg-primary dark:after:bg-dark-white':
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
              <ShoppingBag fill={theme === 'dark' ? '#F1F2F9' : ''} />
            </div>
          </NavLink>
        </div>
      ) : (
        <Link
          to={isLoginPage ? 'sign-in' : 'login'}
          className="m-4 flex h-full max-h-[40px] items-center justify-center rounded-2xl border-b-2 border-b-gray-300 bg-white text-center font-bold text-blue-500 ring-2 
        ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
        >
          {isLoginPage ? 'SIGN-IN' : 'LOGIN'}
        </Link>
      )}
    </div>
  );
};
