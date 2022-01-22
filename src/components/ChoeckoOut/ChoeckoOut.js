import React, { useState } from "react";
import styles from "./ChoeckoOut.module.css";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectCounterAddress, userBasket } from "../../features/counterSlice";
import FlipMove from "react-flip-move";
import { useDispatch } from "react-redux";
import { updatedser } from "../../features/counterSlice";
import { Selectcounter } from "../../features/counterSlice";
import { useNavigate } from "react-router-dom";
import { Selctptmitm } from "../../features/counterSlice";
import { ptmitm } from "../../features/counterSlice";
import { paymentItems } from "../../features/counterSlice";
import { selctfinalprices } from "../../features/counterSlice";
import { usefinalprices } from "../../features/counterSlice";
import { userCounter } from "../../features/counterSlice";
import { finalItems } from "../../features/counterSlice";
function ChoeckoOut() {
  // let finalItm = useSelector(ptmitm);
  let finalItm = useSelector(Selctptmitm);
  let address = useSelector(selectCounterAddress);
  console.log(address);
  console.log(finalItm);
  let nevigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector(userBasket);
  console.log(user);
  const [newUser, setnewUser] = useState(user);
  let newPrice = 0;
  console.log(newPrice, "newPrice");
  newUser.forEach((element) => {
    newPrice = newPrice + element.priceR;
  });
  console.log(newPrice, "newPrice");
  dispatch(
    usefinalprices({
      newPrice: newPrice,
    })
  );

  const RemoveItem = (id) => {
    const newUserData = newUser.filter((data) => id != newUser.indexOf(data));
    setnewUser(newUserData);
    console.log(...newUser);
    dispatch(finalItems(newUserData));
    console.log(user);
  };
  const DeselectItems = (id) => {
    const newUserData = newUser.filter((data) => id != data.id);
    console.log(newUserData);
    setnewUser(newUserData);
    dispatch(finalItems(newUserData));
    // dispatch(userCounter(newUser));
  };
  console.log(newUser);
  const proceedPayment = () => {
    if (address === null) {
      dispatch(paymentItems(newUser));
      nevigate("/Address");
    } else {
      dispatch(paymentItems(newUser));
      nevigate("/payment");
    }
  };
  console.log(finalItm);
  console.log(user);
  return (
    <div className={styles.ChoeckoOut}>
      <Grid container spacing={3}>
        <Grid item md={9}>
          <Paper elevation={0}>
            <div className={styles.Left_part}>
              <div className={styles.leftHeader}>
                <h3>Shopping Cart</h3>
                <p onClick={() => DeselectItems(2)}>Deselect all items</p>
                <span>Price</span>
              </div>
              <FlipMove>
                {newUser.map((data, id) => {
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
                          <button onClick={() => RemoveItem(id)}>Remove</button>
                        </div>
                      </div>
                      <div className={styles.leftMiddle_right}>
                        <p>₹{data.price}</p>
                      </div>
                    </div>
                  );
                })}
              </FlipMove>
            </div>
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper elevation={0}>
            <div className={styles.right_partone}>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" />
            </div>
          </Paper>
          <Paper elevation={0}>
            <div className={styles.right_partsecond}>
              <CurrencyFormat
                renderText={(newPrice) => (
                  <>
                    <p>
                      Subtotal ({newUser.length} item):
                      <strong>₹ {newPrice}</strong>
                    </p>
                    <div>
                      <input
                        type="checkbox"
                        id="gift"
                        name="gift"
                        value="gift"
                      />
                      <p>This order contains a gift</p>
                    </div>
                  </>
                )}
                decimalScale={2}
                value={newPrice} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                // prefix={"$"}
              />

              <button
                onClick={proceedPayment}
                // onClick={() => nevigate("/payment")}
                disabled={newUser.length > 0 ? false : true}
              >
                Proceed to Buy
              </button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChoeckoOut;
