import React from "react";
import Header from "../Header/Header";
import Payment from "../Payment/Payment";
import { useSelector } from "react-redux";
import { Selctptmitm } from "../../features/counterSlice";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51K6YrRSJwg0e4xeSEkjXuWpx7cr9Jp2AEuRwSsT16V2ZJL4vXIUOPqeKm6hNvKCXQAZNiol5AbwhLQj8EbT7zRdR005NVy5Ekp"
);
function HderPayment() {
  let finalItems = useSelector(Selctptmitm);
  console.log(finalItems);
  return (
    <div>
      <Header />

      <Elements stripe={promise}>
        <Payment finalItems={finalItems} />
      </Elements>
    </div>
  );
}

export default HderPayment;
