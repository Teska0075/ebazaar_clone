import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import axios from "axios";

const SpecialProducts = () => {
  const [products, setProducts] = useState([]);
  // console.log("SUPPLY CHECK: ", )
  // // console.log("TOKEN CHECK ", process.env.REACT_APP_PRODUCT_TOKEN);
  // const getProducts = () => {
  //   axios
  //     .get("https://api2.ebazaar.mn/api/products/get1", {
  //       headers: {
  //         ebazaar_token: process.env.REACT_APP_PRODUCT_TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       // console.log("RESULT", res.data.data);
  //       setProducts(res.data.data.slice(19));
  //     })
  //     .catch((err) => {
  //       console.log("ERROR ", err);
  //     });
  // };
  // // console.log("PRICE: ",products[0].locations["62f4aabe45a4e22552a3969f"].price.channel["1"])
  // useEffect(() => {
  //   getProducts();
  // }, [0]);
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1>Онцлох бүтээгдэхүүн</h1>
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
        {products.map((e, idx) => (
          <div key={idx} className={styles.card}>
            <button className={styles.favourite}>
              <img
                src="https://ebazaar.mn/static/media/HeartGrey.b39f36768bee38b5c55273121c102c25.svg"
                alt="favourite"
              />
            </button>
            <div className={styles.cardImg}>
              <img src={e.image} alt="product" />
            </div>
            <div className={styles.cardText}>
              <p>{e.name}</p>
              <div className={styles.cardPrice}>
                <span>
                  {e.locations["62f4aabe45a4e22552a3969f"].price.channel["1"]}₮
                </span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
