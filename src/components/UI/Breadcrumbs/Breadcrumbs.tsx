import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "../../../icons/Arrow-Right";
import { HomePageIcon } from "../../../icons/HomePageIcon";

export const Breadcrumbs = () => {
  const link = useLocation()
    .pathname.split("/")
    .filter((linkItem) => linkItem !== "");

  return (
    <div className="mb-6 flex items-center gap-x-2 text-[14px]/[14px] font-bold sm:mb-10">
      <Link to="/">
        <HomePageIcon />
      </Link>
      {link.map((linkItem, index) => (
        <>
          <ArrowRight fill="#89939A" />
          <Link
            to={`/${linkItem}`}
            className={classNames(
              "capitalize text-primary",
              {
                "pointer-events-none text-secondary": index === link.length - 1,
              },
              {
                "pt-[1px]": index === 0,
              },
            )}
            key={linkItem}
          >
            {linkItem}
          </Link>
        </>
      ))}
    </div>
  );
};
