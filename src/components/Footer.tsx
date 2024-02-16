import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div
        className="
          grid grid-rows-1 gap-8 pt-8 pb-8 pl-4 pr-4
          sm:flex sm:justify-between sm:pl-8 sm:pr-8
        "
      >
        <div>
          <a href="/home">
            <img
              className="h-7 w-20"
              src="../../public/img/Logo.svg"
              alt="nive-gadgets-logo"
            />
          </a>
        </div>

        <div
          className="
            grid gap-3
            sm:flex sm:items-center sm:ml-[5%] sm:gap-14
          "
        >
          <a
            className="
          text-secondary-primary
          uppercase
          font-mont
          font-bold
          text-xs"
            href="/"
          >
            Github
          </a>

          <a
            className="
          text-secondary-primary
          uppercase
          font-mont
          font-bold
          text-xs"
            href="/"
          >
            Contacts
          </a>

          <a
            className="
          text-secondary-primary
          uppercase
          font-mont
          font-bold
          text-xs"
            href="/"
          >
            Rights
          </a>
        </div>

        <div className="flex items-center">
          <button type="button" className="flex items-center self-center gap-4">
            <span
              className="
            text-secondary-primary
            font-mont text-xs"
            >
              Back to top
            </span>
            <img
              className="h-8 w-8"
              src="../../public/img/icons/arrow-upToTop.svg"
              alt="back-to-top-button"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
