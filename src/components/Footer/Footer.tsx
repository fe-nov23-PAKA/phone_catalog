import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { scrollToTop } from "../../utils/scrollToTop";
import { Logo } from "../../icons/Logo";
import { ArrowUp } from "../../icons/Arrow-Up";
import { useAppSelector } from "../../app/hooks";

export const Footer: React.FC = () => {
  const theme = useAppSelector((state) => state.theme);
  const { t, i18n } = useTranslation();

  return (
    <footer
      className="flex w-full items-center justify-center
    border-t border-element-color bg-white transition-all dark:border-dark-elements dark:bg-dark-black"
    >
      <div
        className="container relative w-full 
    py-8 pl-4 sm:flex sm:justify-between sm:px-8"
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
          <Link
            target="_blank"
            className="text-xs font-extrabold uppercase text-secondary
          transition-all hover:text-primary dark:text-dark-secondary dark:hover:text-dark-white"
            to="https://github.com/fe-nov23-PAKA/phone_catalog"
          >
            Github
          </Link>

          <Link
            className="text-xs font-extrabold uppercase text-secondary 
          transition-all hover:text-primary dark:text-dark-secondary dark:hover:text-dark-white"
            to="contacts"
          >
            {t("Contacts")}
          </Link>

          <a
            className="text-xs font-extrabold uppercase text-secondary 
          transition-all hover:text-primary dark:text-dark-secondary dark:hover:text-dark-white"
            href="/"
          >
            {t("Rights")}
          </a>
        </div>
        <div className="md:left-25 absolute left-40 top-9 xl:left-40">
          <button
            type="button"
            onClick={() => i18n.changeLanguage("en")}
            className="mr-3 text-primary dark:text-dark-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 30"
              width="30"
              height="20"
            >
              <clipPath id="t">
                <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
              </clipPath>
              <path d="M0,0v30h50v-30z" fill="#012169" />
              <path d="M0,0 50,30M50,0 0,30" stroke="#fff" strokeWidth="6" />
              <path
                d="M0,0 50,30M50,0 0,30"
                clipPath="url(#t)"
                stroke="#C8102E"
                strokeWidth="4"
              />
              <path
                d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z"
                fill="#C8102E"
                stroke="#FFF"
                strokeWidth="2"
              />
            </svg>
            ENG
          </button>
          <button
            type="button"
            onClick={() => i18n.changeLanguage("ua")}
            className="text-primary dark:text-dark-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20">
              <rect width="30" height="20" fill="#0057B7" />
              <rect width="30" height="20" y="11" fill="#FFD700" />
            </svg>
            UA
          </button>
        </div>
        <div
          className="flex items-center justify-center 
        text-xs font-bold text-secondary"
        >
          <button
            type="button"
            className="group flex items-center gap-4 
            self-center transition-all hover:text-primary dark:text-dark-secondary dark:hover:text-dark-white"
            onClick={scrollToTop}
          >
            {t("Backtop")}
            <span
              className="box-border flex h-8 
            w-8 items-center justify-center rounded-full
            border transition-all group-hover:border-primary dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:group-hover:border-dark-icons dark:group-hover:bg-dark-icons"
            >
              <ArrowUp fill={theme === "dark" ? "#F1F2F9" : "#0F0F11"} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
