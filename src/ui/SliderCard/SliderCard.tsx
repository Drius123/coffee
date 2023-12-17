import { SliderCardProps } from "../../types";
import styles from "./SliderCard.module.scss";

export default function SliderCard({
  img,
  title,
  description,
  price,
}: SliderCardProps) {
  return (
    <div className={styles.card}>
      <img src={img} alt="card" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}
