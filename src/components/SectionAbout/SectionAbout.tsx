/* eslint-disable react/no-array-index-key */
import { EnumText, SectionAboutProps } from "../../types";
import styles from "./SectionAbout.module.scss";

export default function SectionAbout({ img }: SectionAboutProps) {
  return (
    <section className={styles.about}>
      <h2 className={styles.text}>{EnumText.TextAbout}</h2>
      <div className={styles.photos}>
        {img.map((item, i) => (
          <div className={styles.photo}>
            <img src={item} alt="img" key={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
