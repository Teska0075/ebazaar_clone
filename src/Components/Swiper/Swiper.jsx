import React from "react";
import styles from "./style.module.css";

const Swiper = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.slider}>
          <img
            className={styles.img1}
            src="https://ebazaar.mn/media/original/5600526633175562291724383943202307210630468693041322990617497043699721.jpg"
            alt=""
          />
          <img
            className={styles.img2}
            src="https://ebazaar.mn/media/original/9513395142339790408600941812202302270658143475682748880873084388367066.jpg"
            alt=""
          />
          <img
            className={styles.img3}
            src="https://ebazaar.mn/media/original/813268760553859432653801268202303290811195476068478839985301130123943.jpg"
            alt=""
          />
        </div>
        {/* <div className={styles.buttons}>
          <a href="#slide1"></a>
          <a href="#slide2"></a>
          <a href="#slide3"></a>
        </div> */}
      </div>
    </div>
  );
};

export default Swiper;
