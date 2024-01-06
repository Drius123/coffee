import { useState } from "react";
import { EnumText } from "../../types";
import Btn from "../../ui/Button/Button";
import coffee from "../../assets/coffee-icon.svg";
import tea from "../../assets/tea-icon.svg";
import desert from "../../assets/desert-icon.svg";
import styles from "./MenuPage.module.scss";
import {
  MenuPageCardsCoffee,
  MenuPageCardsDesert,
  MenuPageCardsTea,
  coffeeBtns,
  desertBtns,
  teaBtns,
} from "../../data";
import MenuCard from "../../ui/MenuCard/MenuCard";
import ModalWindow from "../../ui/ModalWindow/ModalWindow";

export default function MenuPage() {
  const [activeCoffe, setActiveCoffe] = useState<boolean>(true);
  const [activeTea, setActiveTea] = useState<boolean>(false);
  const [activeDesert, setActiveDesert] = useState<boolean>(false);

  const [img, setImg] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  function handleClickCoffe() {
    setActiveCoffe(true);
    setActiveDesert(false);
    setActiveTea(false);
  }

  function handleClickTea() {
    setActiveCoffe(false);
    setActiveDesert(false);
    setActiveTea(true);
  }

  function handleClickDesert() {
    setActiveCoffe(false);
    setActiveDesert(true);
    setActiveTea(false);
  }

  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>{EnumText.MenuPageText}</h1>
      <div className={styles.btns}>
        <Btn
          type="button"
          text="Coffee"
          onClick={() => handleClickCoffe()}
          active={activeCoffe}>
          <img src={coffee} alt="coffee" />
        </Btn>
        <Btn
          type="button"
          text="Tea"
          onClick={() => handleClickTea()}
          active={activeTea}>
          <img src={tea} alt="tea" />
        </Btn>
        <Btn
          type="button"
          text="Dessert"
          onClick={() => handleClickDesert()}
          active={activeDesert}>
          <img src={desert} alt="desert" />
        </Btn>
      </div>
      <div className={styles.cards}>
        {(
          (activeCoffe && MenuPageCardsCoffee) ||
          (activeTea && MenuPageCardsTea) ||
          (activeDesert && MenuPageCardsDesert) ||
          []
        ).map((item) => (
          <MenuCard
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            onClick={() => {
              setImg(item.img);
              setTitle(item.title);
              setDescription(item.description);
              setPrice(item.price);
              setVisible(true);
            }}
          />
        ))}
      </div>
      <ModalWindow
        img={img}
        title={title}
        description={description}
        price={price}
        active={visible}
        setVisible={setVisible}
        // eslint-disable-next-line no-nested-ternary
        btns={activeCoffe ? coffeeBtns : activeDesert ? desertBtns : teaBtns}
        onClick={(event) =>
          event.currentTarget === event.target && setVisible(false)
        }
      />
    </div>
  );
}
