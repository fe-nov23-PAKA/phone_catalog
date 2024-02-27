import classNames from "classnames";
import { NavLink, NavLinkProps } from "react-router-dom";

interface Props extends NavLinkProps {
  classname?: string;
}

export const NavLinkMenu: React.FC<Props> = ({
  to,
  classname,
  children,
  onClick,
}) => {
  const navActive = (isActive: boolean) =>
    classNames(`${classname}`, {
      "after:content[] after:absolute after:block after:w-full after:h-[2px] after:bg-primary after:scale-100 transition-all dark:after:bg-dark-white !text-primary !bg-none dark:!text-dark-white":
        isActive,
    });

  return (
    <NavLink
      to={to}
      className={({ isActive }) => navActive(isActive)}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};
