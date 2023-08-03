import React from "react";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slideshow = () => {
  const slides = [
    {
      imgUrl:
        "https://ebazaar.mn/media/original/5600526633175562291724383943202307210630468693041322990617497043699721.jpg",
      title: "image1",
    },
    {
      imgUrl:
        "https://ebazaar.mn/media/original/9513395142339790408600941812202302270658143475682748880873084388367066.jpg",
      title: "image2",
    },
    {
      imgUrl:
        "https://ebazaar.mn/media/original/813268760553859432653801268202303290811195476068478839985301130123943.jpg",
      title: "image3",
    },
  ];

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
        {slides.map((e, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <img src={e.imgUrl} alt={e.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slideshow;
