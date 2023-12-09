import { BtnProps } from "../../types";
import styles from "./Button.module.scss";

export default function Btn({ type, text }: BtnProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={styles.btn} type={type || "button"}>
      {text}
    </button>
  );
}
