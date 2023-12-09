import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import { footerBtns } from "../../data";
import FooterBtn from "../../ui/FooterBtn/FooterBtn";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <h2>Sip, Savor, Smile.</h2>
        <h2 className={styles.coffee}>It’s coffee time! </h2>
        <div className={styles.btns}>
          {footerBtns.map((item) => (
            <FooterBtn SVG={item.SVG} link={item.link} key={item.link} />
          ))}
        </div>
      </div>
      <div className={styles.footer__right}>
        <h3>Contact Us</h3>
        <div className={styles.contact}>
          <NavLink to="">8558 Green Rd., LA</NavLink>
          <NavLink to="">+1 (603) 555-0123</NavLink>
          <p>Mon-Sat: 9:00 AM – 23:00 PM</p>
        </div>
      </div>
    </div>
  );
}
