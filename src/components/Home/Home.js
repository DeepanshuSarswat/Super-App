import React from "react";
import OneProdect from "../OneProdect/OneProdect";
import ThreeProduct from "../ThreeProduct/ThreeProduct";
import TwoProduct from "../TwoProduct/TwoProduct";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeImages}>
        <img src="https://m.media-amazon.com/images/I/71SXuetki3L._SX3000_.jpg" />
      </div>
      <div className={styles.home_row}>
        <TwoProduct />
      </div>
      <div className={styles.home_row}>
        <ThreeProduct />
      </div>
      <div className={styles.home_row}>
        <OneProdect />
      </div>
    </div>
  );
}

export default Home;
