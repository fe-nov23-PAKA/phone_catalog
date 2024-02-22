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
      "border-b-2 border-primary !text-primary": isActive,
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
