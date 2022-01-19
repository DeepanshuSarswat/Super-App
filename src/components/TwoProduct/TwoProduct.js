import { style } from "@mui/system";
import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./TwoProduct.module.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { Selectcounter } from "../../features/counterSlice";

const useStyles = makeStyles(() => {
  return {
    GridBackground: {
      backgroundColor: "transparent",
      zIndex: "10",
    },
    cardPadding: {
      padding: 20,
    },
  };
});

function TwoProduct() {
  const classes = useStyles();
  const itemData = [
    {
      id: 2,
      desc: "  Nutritious snack: enjoy deliciously wholesome and healthy snack with Tata Sampann thick poha",
      price: "41.50",
      priceR: 41.5,
      rating: <Rating />,
      img: "https://m.media-amazon.com/images/I/61e5wNIyogS._SL1000_.jpg",
    },
    {
      id: 2,
      desc: "SaleOn Bluetooth Speaker Mini Portable Outdoor Speaker Rechargeable Speaker Small Size (Mix-Colors)",
      price: "350",
      priceR: 350,
      rating: <Rating />,
      img: "https://m.media-amazon.com/images/I/519T90DLrIL.jpg",
    },
  ];
  const dispatch = useDispatch();
  return (
    <div className={styles.TwoProduct}>
      <Grid container className={classes.GridIndex} spacing={4}>
        {itemData.map((data) => {
          return (
            <Grid
              item
              xs={6}
              md={6}
              className={classes.GridBackground}
              key={data.id}
            >
              <Paper elevation={0} className={classes.cardPadding}>
                <p className={styles.box}>{data.desc}</p>
                <p>
                  <strong>₹{data.price}</strong>
                </p>
                <Rating name="read-only" value={5} readOnly />
                <img src={data.img} className={styles.productImage} />

                <button
                  className={styles.button_basket}
                  onClick={() => {
                    dispatch(
                      Selectcounter({
                        id: data.id,
                        desc: data.desc,
                        price: data.price,
                        rating: <Rating />,
                        img: data.img,
                        priceR: data.priceR,
                      })
                    );
                  }}
                >
                  Add to basket
                </button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default TwoProduct;
