import React from "react";
import styles from "./style.module.css"

const Supplier = () => {

  const dummyData = [
    {
      imgUrl:"https://ebazaar.mn/media/product/6451839791366876118714579441202301180039211652005125652064228302797616.jpg",
      title:"Е Базаар Трейд ХХК"
    },
    {
      imgUrl:"https://media.ebazaar.link/logo/supplier/mcs-coca-cola.jpg",
      title:"М-Си-Эс Кока-Кола"
    },
    {
      imgUrl:"https://ebazaar.mn/logo/supplier/anungoo.jpg",
      title:"Анунгоо ХХК"
    },
    {
      imgUrl:"https://ebazaar.mn/media/original/1848454126941192973174226235202301120737221918813832548391243091882641.PNG",
      title:"Сүү ХК"
    },
    {
      imgUrl:"https://ebazaar.mn/media/product/6451839791366876118714579441202301180039211652005125652064228302797616.jpg",
      title:"Е Базаар Трейд ХХК"
    },
    {
      imgUrl:"https://media.ebazaar.link/logo/supplier/mcs-coca-cola.jpg",
      title:"М-Си-Эс Кока-Кола"
    },
    {
      imgUrl:"https://ebazaar.mn/logo/supplier/anungoo.jpg",
      title:"Анунгоо ХХК"
    },
    {
      imgUrl:"https://ebazaar.mn/media/original/1848454126941192973174226235202301120737221918813832548391243091882641.PNG",
      title:"Сүү ХК"
    },
    {
      imgUrl:"https://ebazaar.mn/media/product/6451839791366876118714579441202301180039211652005125652064228302797616.jpg",
      title:"Е Базаар Трейд ХХК"
    },
    {
      imgUrl:"https://media.ebazaar.link/logo/supplier/mcs-coca-cola.jpg",
      title:"М-Си-Эс Кока-Кола"
    },
    {
      imgUrl:"https://ebazaar.mn/logo/supplier/anungoo.jpg",
      title:"Анунгоо ХХК"
    },
    {
      imgUrl:"https://ebazaar.mn/media/original/1848454126941192973174226235202301120737221918813832548391243091882641.PNG",
      title:"Сүү ХК"
    },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1>Нийлүүлэгч</h1>
        <button>
          Бүгдийг үзэх
          <div className={styles.background}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </button>
      </div>
      <div className={styles.bottom}>
        {
          dummyData.map((e)=>(
            <div className={styles.card}>
              <img src={e.imgUrl} alt=""/>
              <span>{e.title}</span>
              <img className={styles.icon} src="https://ebazaar.mn/static/media/HeartGrey.b39f36768bee38b5c55273121c102c25.svg" alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Supplier;
