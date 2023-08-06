import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { UserContext } from "../../../context";

const SignIn = () => {
  const [isValid, setIsValid] = useState(false);
  const { setPhoneNum, setPass, phoneNum, pass, login } =
    useContext(UserContext);

  const changePhone = (e) => {
    setPhoneNum(e.target.value);
  };

  const changePass = (e) => {
    setPass(e.target.value);
  };

  if (isValid) {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src="https://ebazaar.mn/logo/ebazaar.svg" alt="logo" />
            <div className={styles.items}>
              <span>Нууц үг</span>
              <div className={styles.input}>
                <input
                  key={0}
                  placeholder="Нэвтрэх нууц үг"
                  type="text"
                  onChange={changePass}
                />
                <img
                  src="https://ebazaar.mn/static/media/Hide.f9fa7a0aa1c4ee00f8c69733b40fd0bc.svg"
                  alt="eye"
                />
              </div>
              <div className={styles.error1}></div>
              <div className={styles.password}>
                <span>Нууц үгээ мартсан</span>
              </div>
              <button
                onClick={() => {
                  login(phoneNum, pass);
                }}
              >
                Нэвтрэх
              </button>
            </div>
            <div className={styles.signUp}>
              <span>Бүртгүүлээгүй бол?</span>
              <a>Бүртгүүлэх</a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src="https://ebazaar.mn/logo/ebazaar.svg" alt="logo" />
            <div className={styles.items}>
              <span>Нэвтрэх</span>
              <div className={styles.input}>
                <input
                  key={1}
                  placeholder="Утасны дугаар"
                  type="text"
                  onChange={changePhone}
                />
              </div>
              <div className={styles.error}></div>
              <button
                onClick={() => {
                  setIsValid(!isValid);
                }}
              >
                Нэвтрэх
              </button>
            </div>
            <div className={styles.signUp}>
              <span>Бүртгүүлээгүй бол?</span>
              <a>Бүртгүүлэх</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;
