import { CardProps } from "../../types";
import styles from "./MenuCard.module.scss";

export default function MenuCard({
  img,
  title,
  description,
  price,
  onClick,
}: CardProps) {
  return (
    <div className={styles.card} onClick={onClick} role="presentation">
      <img src={img} alt="img" />
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
