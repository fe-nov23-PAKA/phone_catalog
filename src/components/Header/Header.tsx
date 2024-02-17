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
      className={` bg-white border-b overflow-y-hidden border-gray-400 flex flex-col ${
        isMenuOpen ? "overflow-hidden" : ""
      }`}
    >
      <div className="px-4 md:pr-0 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#Home" className="py-4">
            {isMenuOpen ? (
              <img
                src="./public/img/Logo-black.svg"
                alt="Logo"
                className="h-8"/>
            ) : (
              <img
                src="./public/img/Logo.svg" 
                alt="Logo" 
                className="h-8" />
            )}
          </a>
          <nav
            className="hidden md:flex 
              items-center space-x-8 md:ml-8 xl:ml-12"
          >
            <a
              href="#Home"
              className={`relative  text-secondary-primary 
              text-xs font-extrabold hover:text-black uppercase"`}
            >
              Home
            </a>
            <a
              href="#Phones"
              className=" relative text-secondary-primary 
              text-xs font-extrabold hover:text-black uppercase"
            >
              Phones
            </a>
            <a
              href="#Tablets"
              className=" relative text-secondary-primary 
              text-xs font-extrabold hover:text-black uppercase"
            >
              Tablets
            </a>
            <a
              href="#Accessories"
              className="text-secondary-primary 
              text-xs font-extrabold hover:text-black uppercase"
            >
              Accessories
            </a>
          </nav>
        </div>
        <div
          className="hidden md:flex 
          md:border-secondary-primary items-center"
        >
          <button type="button" className="md:p-4 md:border-l">
            <img
              src="./public/img/icons/favourites.svg"
              alt="Favorites"
              className="h-6 w-6 p-1 m-0"
            />
          </button>
          <button type="button" className="md:p-4 md:border-x">
            <img
              src="./public/img/icons/shopping-bag.svg"
              alt="Cart"
              className="h-6 w-6  p-1 m-0"
            />
          </button>
        </div>
        <button
          type="button"
          className="block md:hidden text-secondary-primary focus:outline-none"
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
          className="bg-white border-t border-gray-400 
          flex flex-col left-0 w-full h-full justify-between"
        >
          <ul className="flex mt-8 flex-col items-center space-y-4 flex-grow">
            <li>
              <a
                href="#Home"
                className="text-secondary-primary 
                text-xs font-extrabold hover:text-black uppercase"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Phones"
                className="text-secondary-primary 
                text-xs font-extrabold hover:text-black uppercase"
              >
                Phones
              </a>
            </li>
            <li>
              <a
                href="#Tablets"
                className="text-secondary-primary 
                text-xs font-extrabold hover:text-black uppercase"
              >
                Tablets
              </a>
            </li>
            <li>
              <a
                href="#Accessories"
                className="text-secondary-primary 
                text-xs font-extrabold hover:text-black uppercase"
              >
                Accessories
              </a>
            </li>
          </ul>
          <div className="flex ">
            <button type="button" className="py-6 w-1/2 border">
              <img
                src="./public/img/icons/favourites.svg"
                alt="Favorites"
                className="h-6 w-6 p-1 mx-auto"
              />
            </button>
            <button type="button" className="py-6 w-1/2 border">
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