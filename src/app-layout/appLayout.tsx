import styles from "./appLayout.module.scss";

export default function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <div className={`app-layout__container ${styles.app}`}>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
