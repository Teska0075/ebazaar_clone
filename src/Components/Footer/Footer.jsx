import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.footerLeft}>
          <div className={styles.menu}>
            <p>Ebazaar.mn</p>
            <ul>
              <li>
                Эрхэм зорилго
              </li>
              <li>
                Бидний тухай
              </li>
              <li>
                Веб үйлчилгээ
              </li>
              <li>
                In App үйлчилгээ
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <p>Хамтын ажиллагаа</p>
            <ul>
              <li>
                Бүтээгдэхүүн нийлүүлэх
              </li>
              <li>
                Бүтээгдэхүүн захиалах
              </li>
              <li>
                Түншүүд
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <p>Тусламж</p>
            <ul>
              <li>
                Хэрэглэх заавар
              </li>
              <li>
                Түгээмэл асуултууд
              </li>
              <li>
                Үйлчилгээний нөхцөл
              </li>
              <li>
                Санал хүсэлт
              </li>
              <li>
                Нууцлалын баталгаа
              </li>
            </ul>
          </div>
          <div className={styles.menuContact}>
            <div className={styles.contactInfo}>
              <p>Холбоо барих</p>
              <ul className={styles.contact}>
                <li>
                  <img
                    src="https://ebazaar.mn/static/media/Call_location.b25c12d89418700e22a30db30e7dc319.svg"
                    alt="phone"
                  />
                  +976 7707-1907
                </li>
                <li>
                  <img
                    src="https://ebazaar.mn/static/media/Location.93978af14afe1c46bfb3e0276a9803e5.svg"
                    alt="location"
                  />
                  info@ebazaar.mn
                </li>
              </ul>
              <p className={styles.hayg}>Хаяг</p>
              <div className={styles.address}>
                <img
                  src="https://ebazaar.mn/static/media/Location.93978af14afe1c46bfb3e0276a9803e5.svg"
                  alt="location"
                />
                <span>
                  Улаанбаатар хот, Баянзүрх дүүрэг, 26-р хороо, Олимп хороолол
                  13312, Их Монгол Улсын гудамж 202, Сакура Тауэр, 10 давхар,
                  1006 тоот
                </span>
              </div>
              <p className={styles.holboos}>Холбоосууд</p>
              <div className={styles.socialIcons}>
                <img
                  src="https://ebazaar.mn/static/media/facebook.d9060802669d95d0195b54f4b2ecac29.svg"
                  alt="facebook"
                />
                <img
                  src="https://ebazaar.mn/static/media/instagram.0d3c72c3c1bbcb123a11703d586a8c20.svg"
                  alt="instagram"
                />
                <img
                  src="https://ebazaar.mn/static/media/youtube.5ed0d28dde1b03c4fe081e799d000a4e.svg"
                  alt="youtube"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p>Апп татах холбоос:</p>
          <a href="/">QR кодоо уншуулаад аппаа татаарай</a>
          <img
            src="https://ebazaar.mn/static/media/App%20QR.2cd02942bab8a4ce71cf.png"
            alt="QR code"
          />
          <div className={styles.icons}>
            <img
              src="data:image/png;base64,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"
              alt="play_store"
            />
            <img
              src="data:image/png;base64,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"
              alt="app_store"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomText}>

        <p>Е-БАЗААР Трейд ХХК ©2022 бүх эрх хуулиар хамгаалагдсан</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
