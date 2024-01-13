import { NavLink } from "react-router-dom";
import routeNames from "../../routing/routs";
import { EnumText, NavMenuProps } from "../../types";
import cup from "../../assets/coffee-cup.svg";
import styles from "./NavMenu.module.scss";

export default function NavMenu({ active, setActive }: NavMenuProps) {
  return (
    <div className={styles["nav-menu"]}>
      <NavLink
        to={routeNames.MENU}
        className={!active ? styles.menu : `${styles.menu} ${styles.active}`}
        onClick={() => !active && setActive()}>
        {EnumText.Menu}
        <img src={cup} alt="cup" />
      </NavLink>
    </div>
  );
}
