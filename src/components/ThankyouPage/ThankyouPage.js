import React from "react";
import { useSelector } from "react-redux";
import { selectCounterAddress } from "../../features/counterSlice";
import styles from "./ThankyouPage.module.css";
import { useNavigate } from "react-router-dom";
function ThankyouPage() {
  let nevigate = useNavigate();
  let address = useSelector(selectCounterAddress);
  return (
    <div className={styles.Thankpage}>
      <div className={styles.ThankyouPage}>
        <p>Thank you , {address?.firstName} </p>
        <p>
          Dear {address?.firstName},your payment has been accepted.Thank you for
          shopping with Amazon.{" "}
        </p>
        <button onClick={() => nevigate("/")}>More Shopping</button>
      </div>
    </div>
  );
}

export default ThankyouPage;
