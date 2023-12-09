import { EnumText } from "../../types";
import Button from "../../ui/Button/Button";
import styles from "./SectionPreview.module.scss";

export default function SectionPreview() {
  return (
    <section className={styles.preview}>
      <div className={styles.preview__content}>
        <h1>{EnumText.Preview}</h1>
        <p>{EnumText.PreviewText}</p>
        <Button type="button" text="Menu" />
      </div>
    </section>
  );
}
