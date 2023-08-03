import React from "react";
import styles from "./style.module.css";

const HeaderTop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p>Нэгдсэн Хялбар Захиалга</p>
        <div className={styles.contact}>
          <div className={styles.info}>
            <img
              src="https://ebazaar.mn/static/media/Message.a496788feb7e33d9f95e9d038506655b.svg"
              alt="icon"
            />
            <p>info@ebazaar.mn</p>
          </div>
          <div className={styles.info}>
            <img
              src="https://ebazaar.mn/static/media/Call.49fbc134755d4db3969554ab68f7e69a.svg"
              alt="icon"
            />
            <p>7707-1907</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
