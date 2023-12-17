import SectionAbout from "../../components/SectionAbout/SectionAbout";
import SectionCoffee from "../../components/SectionCoffee/SectionCoffee";
import SectionMobileApp from "../../components/SectionMobileApp/SectionMobileApp";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import { aboutImg } from "../../data";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SectionPreview />
      <SectionCoffee />
      <SectionAbout img={aboutImg} />
      <SectionMobileApp />
    </main>
  );
}
