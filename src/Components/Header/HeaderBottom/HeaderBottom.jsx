import React from "react";
import styles from "./style.module.css";

const HeaderBottom = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftSec}>
          <button className={styles.menu}>
            <img
              src="https://ebazaar.mn/static/media/Category.8d716a110a873d9f8c1e01a555affa0b.svg"
              alt="icon"
            />
            <span>Ангилал</span>
          </button>
          <button className={styles.menu}>
            <span>Нийлүүлэгчид</span>
          </button>
          <button className={styles.menu}>
            <span>Брэнд</span>
          </button>
          <button className={styles.menu}>
            <span>Бүх бүтээгдэхүүн</span>
          </button>
        </div>
        <div className={styles.rightSec}>
          <button>
            <span>Миний хөтөлбөр</span>
            <img
              src="https://ebazaar.mn/static/media/cup2.99fd8720f474725c39f8d834dc3559bd.svg"
              alt="trophy"
            />
          </button>
          <button>
            <span>Промо</span>
            <img
              src="https://ebazaar.mn/static/media/Discount.5a841fb80fbcf15b37d330b8544fb927.svg"
              alt="badge"
            />
          </button>
          <button>
            <img
              className={styles.gif}
              src="https://ebazaar.mn/static/media/shuurhai%20tugeelt%20button.77bd3c1698d50ce91644.gif"
              alt="gif"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
