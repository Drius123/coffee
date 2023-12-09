import styles from "./Nav.module.scss";
import NavItems from "../../data";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-menu"]}>
        {NavItems.map((item: string) => (
          <li className={styles.item} key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
