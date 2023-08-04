import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import useData from "../../hooks/useData";

const Supplier = () => {
  const { suppliersData } = useData();
  // console.log("CHECK: ", suppliersData);
  // const [supplier, setSupplier] = useState([]);
  // console.log("TOKEN SUPPLY ", process.env.REACT_APP_SUPPLIER_TOKEN);
  // const getSupplier = async () => {
  //   axios
  //     .get("https://api.ebazaar.mn/api/suppliers/get", {
  //       headers: {
  //         ebazaar_token: process.env.REACT_APP_SUPPLIER_TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       // console.log("123", res);
  //       // setSupplier(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // // console.log("array", supplier);
  // useEffect(() => {
  //   getSupplier();
  // }, [0]);
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
        {suppliersData.map((e, idx) => (
          <div key={idx} className={styles.card}>
            <img src={e.icon} alt="" />
            <span>{e.name}</span>
            <img
              className={styles.icon}
              src="https://ebazaar.mn/static/media/HeartGrey.b39f36768bee38b5c55273121c102c25.svg"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplier;
