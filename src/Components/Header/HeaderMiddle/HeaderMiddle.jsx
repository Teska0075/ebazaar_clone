import React, { useContext } from "react";
import styles from "./style.module.css";
import { UserContext } from "../../../context";

const HeaderMiddle = () => {
  const { logout } = useContext(UserContext);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftSec}>
          <img
            src="https://ebazaar.mn/static/media/logo.280a6cb12d567691bac2e078db4213b5.svg"
            alt="logo"
          />
          <div className={styles.searchMain}>
            <div className={styles.searchDrop}>
              <select className={styles.select}>
                <option className={styles.option} value="Product">
                  Бүтээгдэхүүн
                </option>
                <option className={styles.option} value="Product">
                  Нийлүүлэгч
                </option>
                <option className={styles.option} value="Product">
                  Брэнд
                </option>
              </select>
            </div>

            <input type="search" placeholder="Хайх утгаа энд оруулна уу" />

            <img
              className={styles.searchIcon}
              src="https://ebazaar.mn/static/media/Search.c0d27419c810b7f409688baf2a026cf3.svg"
            />
          </div>
        </div>
        <div className={styles.rightSec}>
          <button className={styles.notif}>
            <img
              src="https://ebazaar.mn/static/media/Notification.0289c0ab99a98fe2da69a2b092a630a0.svg"
              alt="notif"
            />
            <span>Мэдэгдэл</span>
          </button>
          <button
            className={styles.profile}
            onClick={() => {
              logout();
            }}
          >
            <img
              src="https://ebazaar.mn/static/media/profile3.5f2dce0ddf2c7a1cd0c22bd44ddd35d4.svg"
              alt="profile"
            />
            <span>Profile</span>
          </button>
          <div className={styles.info}>
            <div className={styles.shop}>
              <img
                className={styles.shopIcon}
                src="https://ebazaar.mn/static/media/store.751c2847f979375d8dacd2830789badc.svg"
                alt="shop"
              />
              <div className={styles.shopText}>
                <p>Costco</p>
                <span>8 нэрийн дэлгүүр</span>
              </div>
              <img
                src="https://ebazaar.mn/static/media/ArroRightDown.5ccc071797ab80b43f30a32608ff6d26.svg"
                alt="arrow"
              />
            </div>
            <div className={styles.cart}>
              <div className={styles.basket}>
                <img
                  src="https://ebazaar.mn/static/media/Buy.ee4126bd0e7c96957eca833404837342.svg"
                  alt=""
                ></img>
                <span>0</span>
              </div>
              <div className={styles.cartText}>
                <p>0₮ </p>
                <span>Таны сагсанд</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
