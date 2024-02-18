/* eslint-disable prettier/prettier */
import React from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import logo from "../../assets/img/Logo.svg";
import arrow_up_black from "../../assets/img/icons/arrow-up-black.svg";

export const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-element-color 
    flex justify-center items-center"
    >
      <div
        className="container py-8 pl-4 
    sm:flex sm:justify-between sm:px-8 w-full"
      >
        <div className="mb-8 ms:mb-0">
          <a href="/">
            <img className="h-7 w-20" src={logo} alt="nice-gadgets-logo" />
          </a>
        </div>

        <div
          className="grid gap-3 sm:flex sm:items-center 
    sm:max-w-[35%] sm:w-full sm:justify-between"
        >
          <a
            className="text-secondary uppercase
          font-extrabold text-xs hover:text-primary duration-300"
            href="/"
          >
            Github
          </a>

          <a
            className="text-secondary uppercase 
          font-extrabold text-xs hover:text-primary duration-300"
            href="/"
          >
            Contacts
          </a>

          <a
            className="text-secondary uppercase 
          font-extrabold text-xs hover:text-primary duration-300"
            href="/"
          >
            Rights
          </a>
        </div>

        <div
          className="flex items-center justify-center 
        text-secondary  text-xs font-bold"
        >
          <button
            type="button"
            className="flex items-center self-center 
            gap-4 duration-300 group hover:text-primary"
            onClick={scrollToTop}
          >
            Back to top
            <span
              className="group-hover:border-primary h-8 w-8 
            justify-center items-center flex 
            box-border border rounded-full duration-300"
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
