import { BtnProps } from "../../types";
import styles from "./Button.module.scss";

export default function Btn({
  type,
  text,
  onClick,
  children,
  active,
}: BtnProps) {
  return (
    <button
      className={!active ? styles.btn : `${styles.btn} ${styles.active}`}
      // eslint-disable-next-line react/button-has-type
      type={type || "button"}
      onClick={onClick}>
      {children}
      {text}
    </button>
  );
}
