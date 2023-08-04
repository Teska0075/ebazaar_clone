import React from "react";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useData from "../../hooks/useData";

const Slideshow = () => {
  const { bannerData } = useData();
  // console.log("TEST: ", bannerData);

  return (
    <>
      <Swiper
        className={styles.swiper}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ disableOnInteraction: false, delay: 2500 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {bannerData.map((e, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <img src={e.file} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slideshow;
