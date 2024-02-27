import React from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import { Logo } from "../../icons/Logo";
import { ArrowUp } from "../../icons/Arrow-Up";
import { useAppSelector } from "../../app/hooks";

export const Footer: React.FC = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <footer
      className="dark:border-dark-elements dark:bg-dark-black flex w-full items-center
    justify-center border-t border-element-color transition-all"
    >
      <div
        className="container w-full py-8 
    pl-4 sm:flex sm:justify-between sm:px-8"
      >
        <div className="mb-8 sm:mb-0">
          <a href="/">
            <Logo fill={theme === "dark" ? "#F1F2F9" : "#F447AF"} />
          </a>
        </div>

        <div
          className="mb-8 flex flex-col gap-3 sm:mb-0
    sm:w-full sm:max-w-[35%] sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            className="dark:text-dark-secondary dark:hover:text-dark-white text-xs font-extrabold
          uppercase text-secondary transition-all hover:text-primary"
            href="/"
          >
            Github
          </a>

          <a
            className="dark:text-dark-secondary dark:hover:text-dark-white text-xs font-extrabold 
          uppercase text-secondary transition-all hover:text-primary"
            href="/"
          >
            Contacts
          </a>

          <a
            className="dark:text-dark-secondary dark:hover:text-dark-white text-xs font-extrabold 
          uppercase text-secondary transition-all hover:text-primary"
            href="/"
          >
            Rights
          </a>
        </div>

        <div
          className="flex items-center justify-center 
        text-xs font-bold text-secondary"
        >
          <button
            type="button"
            className="dark:text-dark-secondary dark:hover:text-dark-white group flex 
            items-center gap-4 self-center transition-all hover:text-primary"
            onClick={scrollToTop}
          >
            Back to top
            <span
              className="dark:border-dark-secondary dark:group-hover:border-dark-white box-border 
            flex h-8 w-8 items-center
            justify-center rounded-full border transition-all group-hover:border-primary"
            >
              <ArrowUp fill={theme === "dark" ? "#F1F2F9" : "#0F0F11"} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
