import React from 'react'
import styles from "./style.module.css"

const Marathon = () => {
  return (
    <div className={styles.main}>
        <a className={styles.card}>
            <span style={{color:"#000"}}>Азын хүрд</span>
            <img src="https://ebazaar.mn/static/media/az.0032520bab66aa51e19fd9cc0014fafd.svg" alt="" />
        </a>
        <a className={styles.card}>
            <span>Миний хөтөлбөр</span>
            <img src="https://ebazaar.mn/static/media/hutulbur.963ae903b574b57dc776bb841d15b498.svg" alt="" />
        </a>
        <a className={styles.card}>
            <span>Шуурхай зээл</span>
            <img src="https://ebazaar.mn/static/media/shuurhai.46a9a6744d54a7acd7cd461de68ecc8b.svg" alt="" />
        </a>
        <a className={styles.card}>
            <span>Хямдрал, урамшуулал</span>
            <img src="https://ebazaar.mn/static/media/sale.cdf7ece46c9c03b0d160cb38f32d1caa.svg" alt="" />
        </a>
    </div>
  )
}

export default Marathon