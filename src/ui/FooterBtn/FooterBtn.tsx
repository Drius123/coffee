import { NavLink } from "react-router-dom";
import styles from "./FooterBtn.module.scss";
import { FooterBtnProps } from "../../types";

export default function FooterBtn({ SVG, link }: FooterBtnProps) {
  return (
    <NavLink to={link} className={styles.btn}>
      <img src={SVG} alt="social-media" />
    </NavLink>
  );
}
