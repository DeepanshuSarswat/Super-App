import { style } from "@mui/system";
import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./OneProdect.module.css";
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

function OneProdect() {
  const classes = useStyles();
  const itemData = [
    {
      id: 2,
      desc: "    OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV43Y1 (Black) (2020 Model)",
      price: "26,999.00",
      priceR: 26999.0,
      rating: <Rating />,
      img: "https://m.media-amazon.com/images/I/71vZLIfj5yS._AC_UY327_FMwebp_QL65_.jpg",
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
              md={12}
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
                        priceR: data.priceR,
                        img: data.img,
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
export default OneProdect;
