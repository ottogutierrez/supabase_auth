import { NavLink } from "react-router-dom";
import React from "react";
import {
  borders,
  borderColor,
  textColor,
  classnames,
} from "tailwindcss-classnames";

const activeLink = classnames(
  borders("border-b-2"),
  borderColor("border-indigo-500"),
  textColor("hover:text-indigo-500")
);
const nonActiveLink = classnames(textColor("hover:text-indigo-500"));

interface MyNavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const MyNavLink = ({ to, children, className }: MyNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? activeLink : nonActiveLink} px-2 py-4 ${className || ""}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
