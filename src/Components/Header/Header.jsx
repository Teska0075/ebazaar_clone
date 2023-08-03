import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <HeaderTop />
      <div className={styles.sticky}>
        <HeaderMiddle />
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
