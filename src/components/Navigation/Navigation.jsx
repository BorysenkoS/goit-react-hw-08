import css from "./Navigation .module.css";
import clsx from "clsx";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
