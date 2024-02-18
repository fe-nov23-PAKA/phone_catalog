import classNames from "classnames";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        "bg-white flex flex-col",
        { "h-screen": isMenuOpen },
        { "border-b mb-6": !isMenuOpen },
      )}
    >
      <div className="px-4 h-custom md:pr-0 flex shrink-0 items-center justify-between">
        <div className="flex items-center">
          <a href="#Home" className="py-4">
            {isMenuOpen ? (
              <img
                src="./public/img/Logo-black.svg"
                alt="Logo"
                className="h-8"
              />
            ) : (
              <img src="./public/img/Logo.svg" alt="Logo" className="h-8 text-[#F447AF]" />
            )}
          </a>
          <nav
            className={classNames(
              "hidden md:flex font-mont font-extrabold items-center gap-x-8 xl:gap-x-16 tracking-wider md:ml-8 xl:ml-12",
            )}
          >
            <a
              href="#Home"
              className="py-navlinks text-secondary text-xs font-extrabold md:hover:text-primary uppercase duration-300"
            >
              Home
            </a>
            <a
              href="#Phones"
              className="relative py-navlinks text-secondary text-xs font-extrabold md:hover:text-primary uppercase duration-300"
            >
              Phones
            </a>
            <a
              href="#Tablets"
              className="py-navlinks text-secondary text-xs font-extrabold md:hover:text-primary uppercase duration-300"
            >
              Tablets
            </a>
            <a
              href="#Accessories"
              className="relative py-navlinks text-secondary text-xs font-extrabold md:hover:text-primary uppercase duration-300"
            >
              Accessories
            </a>
          </nav>
        </div>
        <div
          className="hidden md:flex 
          md:border-secondary items-center"
        >
          <button type="button" className="md:p-6 md:border-l hover:bg-hover-color duration-300">
            <img
              src="./public/img/icons/favourites.svg"
              alt="Favorites"
              className="h-6 w-6 p-1 m-0"
            />
          </button>
          <button type="button" className="md:p-6 md:border-x hover:bg-hover-color duration-300">
            <img
              src="./public/img/icons/shopping-bag.svg"
              alt="Cart"
              className="h-6 w-6  p-1 m-0"
            />
          </button>
        </div>
        <button
          type="button"
          className="block md:hidden text-secondary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <img
              src="./public/img/icons/close.svg"
              alt="Close Menu"
              className="h-6 w-6"
            />
          ) : (
            <img
              src="./public/img/icons/menu.svg"
              alt="Open Menu"
              className="h-6 w-6"
            />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div
          className={classNames("bg-white border-t flex flex-col left-0 w-full h-full justify-between overflow-hidden")}
        >
          <ul className="flex mt-6 tracking-wider font-mont flex-col items-center space-y-4 flex-grow overflow-auto">
            <li>
              <a
                href="#Home"
                className="text-secondary text-xs font-extrabold uppercase"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Phones"
                className="text-secondary text-xs font-extrabold uppercase"
              >
                Phones
              </a>
            </li>
            <li>
              <a
                href="#Tablets"
                className="text-secondary text-xs font-extrabold uppercase"
              >
                Tablets
              </a>
            </li>
            <li>
              <a
                href="#Accessories"
                className="text-secondary text-xs font-extrabold uppercase"
              >
                Accessories
              </a>
            </li>
          </ul>
          <div className="flex sticky">
            <button type="button" className="py-6 w-1/2 border-t border-r">
              <img
                src="./public/img/icons/favourites.svg"
                alt="Favorites"
                className="h-6 w-6 p-1 mx-auto"
              />
            </button>
            <button type="button" className="py-6 w-1/2 border-t">
              <img
                src="./public/img/icons/shopping-bag.svg"
                alt="Cart"
                className="h-6 w-6 p-1 mx-auto"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
