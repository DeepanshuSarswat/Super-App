import React from "react";
import { useEffect } from "react";
import styles from "./Payment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selctfinalprices,
  Selctptmitm,
  selectCounterAddress,
} from "../../features/counterSlice";
import Rating from "@mui/material/Rating";
import { userUser } from "../../features/counterSlice";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { userBasket } from "../../features/counterSlice";
import { Selectcounter } from "../../features/counterSlice";
import { finalBasket } from "../../features/counterSlice";
import { db } from "../../firebase";
function Payment({ finalItems }) {
  console.log("finalItems..", finalItems);
  let dispatch = useDispatch();
  let address = useSelector(selectCounterAddress);
  let nevigate = useNavigate();

  let finalPrices = useSelector(selctfinalprices);
  finalPrices = finalPrices?.newPrice;
  console.log(finalPrices, "finalPrices");
  const LoginUser = useSelector(userUser);
  console.log(LoginUser, "Loginuser");
  const stripe = useStripe();
  const element = useElements();
  let finalItm = useSelector(Selctptmitm);

  console.log(finalItm, "finalItm");

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const handelSubmit = (e) => {
    e.preventDefault();

    setProcessing(true);
    setSucceeded(true);
    setError(null);
    setProcessing(false);
    nevigate("/ThankyouPage");
    dispatch(finalBasket());
  };
  const handelChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className={styles.Payment}>
      <div className={styles.paymentAddres}>
        <p>
          {LoginUser?.email}
          <span>Total Items = {finalItm?.length}</span>
        </p>
        <p>{address?.firstName}</p>
        <p>Street Number : {address.Streetnumber}</p>
        <p>
          {address.City}, {address.State} {address.PINCode}
        </p>
        <p>{address.country}</p>
      </div>
      <div className={styles.PaymentItems}>
        {finalItm &&
          finalItm.map((data, id) => {
            return (
              <div className={styles.leftMiddle}>
                {console.log(data.priceR)}
                <div className={styles.MiddlleLeftImage}>
                  <img src={data.img} />
                </div>
                <div className={styles.leftMiddle_left}>
                  <p> {data.desc}</p>
                  <Rating name="read-only" value={5} readOnly />
                  <p>In stock</p>
                  <div>
                    <p>Eligible for FREE Shipping</p>
                  </div>
                  <div>
                    {/* <button onClick={() => RemoveItem(id)}>Remove</button> */}
                  </div>
                </div>
                <div className={styles.leftMiddle_right}>
                  <p>₹{data.price}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.ActuallPayment}>
        <h3>Payment Methods</h3>
        <div className={styles.PaymentDetails}>
          <form onSubmit={handelSubmit}>
            <CardElement onChange={handelChange} />
            <div className="payment_paymentContainer">
              <CurrencyFormat
                renderText={(finalPrices) => (
                  <>
                    <p className={styles.orderTotal}>
                      Order Total:
                      <strong> {finalPrices}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={finalPrices}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
              <button
                disabled={processing || disabled || succeeded}
                className={styles.paymentbutton}
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {/* Errors */}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
