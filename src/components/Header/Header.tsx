import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import cup from "../../assets/coffee-cup.svg";
import routeNames from "../../routing/routs";
import styles from "./Header.module.scss";
import Nav from "../../ui/Nav/Nav";
import { EnumText } from "../../types";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.header}>
      <NavLink to={routeNames.HOME} onClick={() => setActive(false)}>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <Nav />
      <NavLink
        to={routeNames.MENU}
        className={!active ? styles.menu : `${styles.menu} ${styles.active}`}
        onClick={() => setActive(!active)}>
        {EnumText.Menu}
        <img src={cup} alt="cup" />
      </NavLink>
    </div>
  );
}
