import { useState } from "react";
import { BurgerProps } from "../../types";
import Btn from "../Button/Button";
import Nav from "../Nav/Nav";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Burger.module.scss";

export default function Burger({ active, setActive }: BurgerProps) {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <div
      className={
        menuActive
          ? `${styles.burger} ${styles["active-burger"]}`
          : styles.burger
      }>
      <Btn
        type="button"
        text=""
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      />
      <div
        className={
          menuActive ? `${styles.menu} ${styles.active}` : styles.menu
        }>
        <Nav />
        <NavMenu active={active} setActive={() => setActive(!active)} />
      </div>
    </div>
  );
}
