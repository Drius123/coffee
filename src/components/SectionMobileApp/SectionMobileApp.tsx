import { NavLink } from "react-router-dom";
import { EnumText } from "../../types";
import styles from "./SectionMobileApp.module.scss";
import mobile from "../../assets/mobile-screens.png";
import appStore from "../../assets/AppStoreIcon.svg";
import googlePlay from "../../assets/GooglePlayIcon.svg";

export default function SectionMobileApp() {
  return (
    <section className={styles["mobile-app"]}>
      <div className={styles.download}>
        <h2 className={styles.title}>{EnumText.DownloadTitle}</h2>
        <p className={styles.description}>{EnumText.DownloadDescription}</p>
        <div className={styles.links}>
          <NavLink to="appStore">
            <img src={appStore} alt="appStoreIcon" />
            <p>{EnumText.BtnAppStoreText}</p>
          </NavLink>
          <NavLink to="googlePlay">
            <img src={googlePlay} alt="googlePlayIcon" />
            <p>{EnumText.BtnGooglePlayText}</p>
          </NavLink>
        </div>
      </div>
      <div className={styles.mobiles}>
        <img src={mobile} alt="mobiles" />
      </div>
    </section>
  );
}
