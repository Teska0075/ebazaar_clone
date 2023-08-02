import React from "react";
import styles from "./style.module.css";

const Category = () => {
  const dummyData = [
    {
      iconUrl: "https://media.ebazaar.link/img/category/undaa.svg",
      name: "Ус, ундаа",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/budaa.svg",
      name: "Гурил, будаа, гоймон",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/ger_ahui.svg",
      name: "Гэр ахуй",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/undaa.svg",
      name: "Ус, ундаа",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/budaa.svg",
      name: "Гурил, будаа, гоймон",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/ger_ahui.svg",
      name: "Гэр ахуй",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/ger_ahui.svg",
      name: "Гэр ахуй",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/undaa.svg",
      name: "Ус, ундаа",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/budaa.svg",
      name: "Гурил, будаа, гоймон",
    },
    {
      iconUrl: "https://media.ebazaar.link/img/category/ger_ahui.svg",
      name: "Гэр ахуй",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1>Ангилал</h1>
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
        {dummyData.map((e) => (
          <div className={styles.card}>
            <img src={e.iconUrl} alt="icon" />
            <span>{e.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;