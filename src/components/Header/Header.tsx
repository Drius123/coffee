import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import routeNames from "../../routing/routs";
import styles from "./Header.module.scss";
import Nav from "../../ui/Nav/Nav";
import NavMenu from "../../ui/NavMenu/NavMenu";
import Burger from "../../ui/Burger/Burger";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.header}>
      <NavLink to={routeNames.HOME} onClick={() => setActive(false)}>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles["nav-menu"]}>
        <NavMenu active={active} setActive={() => setActive(!active)} />
      </div>
      <Burger active={active} setActive={setActive} />
    </div>
  );
}
