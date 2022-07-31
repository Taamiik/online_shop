import { useEffect, useState } from "react";

import Button from "../../../components/Button";
import styles from "./Header.module.scss";
import Logo from "../../../assets/logo.svg";
import Search from "../../../assets/search.svg";
import { placeholderText } from "./constants";
import { animationText } from "./utils";

const Header: React.FC = (): React.ReactElement => {
  const [placeholder, setPlaceholder] = useState<string>("");
  const [lengthArr, setLengthArr] = useState<number>(placeholderText.length);
  const [flag, setFlag] = useState<boolean>(false);


  useEffect(() => {
    // animationText(placeholderText[lengthArr - 1], setPlaceholder, setFlag);
    // if (lengthArr === 1) {
    //   setLengthArr(placeholderText.length);
    // } else {
    //   setLengthArr(lengthArr - 1);
    // }
  }, [flag]);

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={Logo} alt="Логотип" className={styles.logo} />
      </div>

      <div className={styles.header__search}>
        <input className={styles.input} placeholder={placeholder} />

        <img src={Search} className={styles.searchIcon} />
      </div>

      <div className={styles.header__account}>
        <Button title="Войти" variant="text" />
        <Button title="Регистрация" variant="text" />
      </div>
    </div>
  );
};

export default Header;
