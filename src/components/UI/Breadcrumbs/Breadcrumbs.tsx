import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { ArrowRight } from "../../../icons/Arrow-Right";
import { HomePageIcon } from "../../../icons/HomePageIcon";

export const Breadcrumbs = () => {
  const link = useLocation()
    .pathname.split("/")
    .filter((linkItem) => linkItem !== "");

  return (
    <div className="mb-6 flex items-center gap-x-2 text-[14px]/[14px] font-bold sm:mb-10">
      <Link to="/">
        <HomePageIcon className="dark:text-dark-secondary dark:hover:text-dark-white transition" />
      </Link>
      {link.map((linkItem, index) => (
        <React.Fragment key={linkItem}>
          <ArrowRight
            fill={
              localStorage.getItem("theme") === "dark" ? "#4A4D58" : "#89939A"
            }
          />
          <Link
            to={`/${linkItem}`}
            className={classNames(
              "dark:text-dark-secondary dark:hover:text-dark-white capitalize text-primary transition",
              {
                "dark:text-dark-white pointer-events-none text-secondary":
                  index === link.length - 1,
              },
              {
                "pt-[1px]": index === 0,
              },
            )}
            key={linkItem}
          >
            {linkItem}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
