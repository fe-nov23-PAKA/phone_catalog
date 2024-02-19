/* eslint-disable prettier/prettier */
import React from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import logo from "../../../public/assets/img/Logo.svg";
import arrow_up_black from "../../icons/arrow-up-black.svg";

export const Footer: React.FC = () => {
  return (
    <footer
      className="flex items-center 
    justify-center border-t border-element-color"
    >
      <div
        className="container w-full py-8 
    pl-4 sm:flex sm:justify-between sm:px-8"
      >
        <div className="mb-8 sm:mb-0">
          <a href="/">
            <img className="h-7 w-20" src={logo} alt="nice-gadgets-logo" />
          </a>
        </div>

        <div
          className="grid gap-3 sm:flex sm:w-full 
    sm:max-w-[35%] sm:items-center sm:justify-between"
        >
          <a
            className="text-xs font-extrabold
          uppercase text-secondary hover:text-primary "
            href="/"
          >
            Github
          </a>

          <a
            className="text-xs font-extrabold 
          uppercase text-secondary hover:text-primary "
            href="/"
          >
            Contacts
          </a>

          <a
            className="text-xs font-extrabold 
          uppercase text-secondary hover:text-primary "
            href="/"
          >
            Rights
          </a>
        </div>

        <div
          className="flex items-center justify-center 
        text-xs  font-bold text-secondary"
        >
          <button
            type="button"
            className="group flex items-center 
            gap-4  self-center hover:text-primary"
            onClick={scrollToTop}
          >
            Back to top
            <span
              className="box-border flex h-8 
            w-8 items-center justify-center 
            rounded-full border group-hover:border-primary "
            >
              <img
                className="h-2 w-2"
                src={arrow_up_black}
                alt="back-to-top-button"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
