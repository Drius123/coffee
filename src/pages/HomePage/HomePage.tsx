import SectionCoffee from "../../components/SectionCoffee/SectionCoffee";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SectionPreview />
      <SectionCoffee />
    </main>
  );
}
