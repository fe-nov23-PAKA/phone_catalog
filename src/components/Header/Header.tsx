import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-400 flex flex-col">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#Home" className="py-4">
            <img src="./public/img/Logo.svg" alt="Logo" className="h-8" />
          </a>

          <nav
            className="hidden md:flex 
              items-center space-x-8 md:ml-8 xl:ml-12"
          >
            <a
              href="#Home"
              className="text-secondary-primary 
              text-xs font-extrabold hover:text-black uppercase"
            >
              Home
            </a>
            <a
              href="#Phones"
              className="text-secondary-primary 
              text-xs font-extrabold hover:text-black uppercase"
            >
              Phones
            </a>
            <a
              href="#Tablets"
              className="text-secondary-primary 
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

        {/* Cart and Favorites Buttons */}
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

        {/* Burger Menu */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="bg-white border-t border-gray-600 
          flex flex-col h-screen w-full overflow-y-hidden"
        >
          <ul className="flex flex-col items-center space-y-4 flex-grow">
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
            <button type="button" className=" py-6  w-1/2 border">
              <img
                src="./public/img/icons/favourites.svg"
                alt="Favorites"
                className="h-6 w-6 p-1 mx-auto"
              />
            </button>
            <button type="button" className="py-6  w-1/2 border">
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
