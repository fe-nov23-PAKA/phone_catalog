import React from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { Logo } from "../../icons/Logo";
import { ArrowUp } from "../../icons/Arrow-Up";

export const Footer: React.FC = () => {
  return (
    <footer
      className="fixed bottom-0 flex w-full items-center
    justify-center border-t border-element-color"
    >
      <div
        className="container w-full py-8 
    pl-4 sm:flex sm:justify-between sm:px-8"
      >
        <div className="mb-8 sm:mb-0">
          <a href="/">
            <Logo fill="#F447AF" />
          </a>
        </div>

        <div
          className="mb-8 flex flex-col gap-3 sm:w-full
    sm:max-w-[35%] sm:flex-row sm:items-center sm:justify-between"
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
              <ArrowUp fill="#0F0F11" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
