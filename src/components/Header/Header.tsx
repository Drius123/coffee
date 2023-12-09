import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import cup from "../../assets/coffee-cup.svg";
import routeNames from "../../routing/routs";
import styles from "./Header.module.scss";
import Nav from "../../ui/Nav/Nav";
import { EnumText } from "../../types";

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to={routeNames.HOME}>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <Nav />
      <NavLink to={routeNames.MENU} className={styles.menu}>
        {EnumText.Menu}
        <img src={cup} alt="cup" />
      </NavLink>
    </div>
  );
}
