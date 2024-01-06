import { useEffect, useState } from "react";
import { EnumText, ModalWindowProps } from "../../types";
import Btn from "../Button/Button";
import info from "../../assets/info-empty.svg";
import styles from "./ModalWindow.module.scss";

export default function ModalWindow({
  img,
  title,
  description,
  price,
  active,
  setVisible,
  btns,
  onClick,
}: ModalWindowProps) {
  const [firstBtnSizeActive, setFirstBtnSizeActive] = useState<boolean>(true);
  const [secondBtnSizeActive, setSecondBtnSizeActive] =
    useState<boolean>(false);
  const [thirdBtnSizeActive, setThirdBtnSizeActive] = useState<boolean>(false);
  const btnSizeActive = [
    firstBtnSizeActive,
    secondBtnSizeActive,
    thirdBtnSizeActive,
  ];
  const setBtnSizeActive = [
    setFirstBtnSizeActive,
    setSecondBtnSizeActive,
    setThirdBtnSizeActive,
  ];

  const [firstBtnAdditivesActive, setFirstBtnAdditivesActive] =
    useState<boolean>(false);
  const [secondBtnAdditivesActive, setSecondBtnAdditivesActive] =
    useState<boolean>(false);
  const [thirdBtnAdditivesActive, setThirdBtnAdditivesActive] =
    useState<boolean>(false);
  const btnAdditivesActive = [
    firstBtnAdditivesActive,
    secondBtnAdditivesActive,
    thirdBtnAdditivesActive,
  ];
  const setBtnAdditivesActive = [
    setFirstBtnAdditivesActive,
    setSecondBtnAdditivesActive,
    setThirdBtnAdditivesActive,
  ];

  useEffect(
    () =>
      setBtnAdditivesActive
        .concat(setBtnSizeActive)
        .forEach((item, index) => (index === 3 ? item(true) : item(false))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [btns]
  );

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
              {btns.size.map((item, index) => (
                <Btn
                  type="button"
                  key={item}
                  text={item}
                  active={btnSizeActive[index]}
                  onClick={() => {
                    setBtnSizeActive.forEach((itm, indx) =>
                      index !== indx ? itm(false) : null
                    );
                    setBtnSizeActive[index](!btnSizeActive[index]);
                  }}
                />
              ))}
            </div>
          </div>
          <div className={styles.additives}>
            <p className={styles.add}>Additives</p>
            <div className={styles.btns}>
              {btns.additives.map((item, index) => (
                <Btn
                  type="button"
                  key={item}
                  text={item}
                  active={btnAdditivesActive[index]}
                  onClick={() =>
                    setBtnAdditivesActive[index](!btnAdditivesActive[index])
                  }
                />
              ))}
            </div>
          </div>
          <div className={styles.totals}>
            <p className={styles.total}>Total:</p>
            <p className={styles.price}>{price}</p>
          </div>
          <div className={styles.alert}>
            <img src={info} alt="info-img" />
            <p>{EnumText.AlertText}</p>
          </div>
          <div className={styles["btn-close"]}>
            <Btn type="button" text="Close" onClick={() => setVisible(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
