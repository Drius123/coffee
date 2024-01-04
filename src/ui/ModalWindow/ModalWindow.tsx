import { ModalWindowProps } from "../../types";
import Btn from "../Button/Button";
import styles from "./ModalWindow.module.scss";

export default function ModalWindow({
  img,
  title,
  description,
  price,
  active,
  btns,
  onClick,
}: ModalWindowProps) {
  return (
    <div
      className={!active ? styles.hidden : styles["modal-window"]}
      onClick={(e) => onClick(e)}
      role="presentation">
      <div className={styles.window}>
        <div className={styles.image}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.information}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.sizes}>
            <p className={styles.size}>Size</p>
            <div className={styles.btns}>
              {btns.size.map((item) => (
                <Btn type="button" text={item} />
              ))}
            </div>
          </div>
          <div className={styles.additives}>
            <p className={styles.add}>Additives</p>
            <div className={styles.btns}>
              {btns.additives.map((item) => (
                <Btn type="button" text={item} />
              ))}
            </div>
          </div>
          <div className={styles.totals}>
            <p className={styles.total}>Total:</p>
            <p className={styles.price}>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
