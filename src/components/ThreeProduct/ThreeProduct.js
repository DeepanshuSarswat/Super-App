import { style } from "@mui/system";
import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./ThreeProduct.module.css";
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

function ThreeProduct() {
  const classes = useStyles();
  const itemData = [
    {
      id: 2,
      desc: "Woodiva Multipurpose Folding Newspaper Holder Bin for Magazines,Paper, Records, Artwork,...",
      price: "625",
      priceR: 625,
      rating: <Rating />,
      img: "https://m.media-amazon.com/images/I/717ncrMg-sL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      desc: "  Fastrack Analog Men's Watch :Pair this watch with your blue tshirt to match it with the dial of the watch.",
      price: "1,645.00",
      priceR: 1645.0,
      rating: <Rating />,
      img: "https://m.media-amazon.com/images/I/71To33g0W7L._UL1500_.jpg",
    },
    {
      id: 2,
      desc: "    Tata Salt Lite, 15% Low Sodium Iodised Salt, 1kg:Optimum sodium intake is recommended for managing your...",
      price: "38.00",
      priceR: 38,

      rating: <Rating />,
      img: "https://m.media-amazon.com/images/I/61Zgf3krb7L._SL1000_.jpg",
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
              md={4}
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

export default ThreeProduct;
