import * as React from "react";
import styles from "./Header.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import { selectCounterAddress, userBasket } from "../../features/counterSlice";
import { useNavigate } from "react-router-dom";
import { userUser } from "../../features/counterSlice";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { CounterAddress } from "../../features/counterSlice";
function Header() {
  const dispatch = useDispatch();
  const LoginUser = useSelector(userUser);
  let address = useSelector(selectCounterAddress);
  console.log(address);
  console.log(LoginUser, "this is Login user");
  // console.log("this is value", LoginUser._delegate);
  let nevigate = useNavigate();
  const GotohomePage = () => {
    nevigate("/");
    console.log("hello");
  };
  const user = useSelector(userBasket);

  console.log(user, " value of basket");
  const handelSign = () => {
    if (LoginUser) {
      auth.signOut();
    }
    dispatch(CounterAddress(null));
    nevigate("/signin");
  };
  console.log(user, "user");
  const Checkcart = () => {
    if (LoginUser) {
      nevigate("/checkout");
    } else {
      alert("please register yourself");
    }
  };
  let GotoTodo = () => {
    nevigate("/SuperTodo");
  };
  let GotoSuperMovie = () => {
    nevigate("/supermovie");
  };
  let GotoWeather = () => {
    nevigate("/SuperWeather");
  };
  return (
    <div className={styles.headerpr}>
      <div className={styles.Header}>
        <div className={styles.Header_left}>
          <div className={styles.Header_logo}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              onClick={GotohomePage}
            />
          </div>
          <div className={styles.Address}>
            <div className={styles.Address_logo}>
              <LocationOnIcon className={styles.icon_add} />
            </div>
            <div className={styles.Address_Details}>
              <p>Deliver to {address ? address.firstName : "User"}</p>
              {address ? (
                <p>
                  {address.City} - {address.PINCode}
                </p>
              ) : (
                <p onClick={() => nevigate("Address")}>Select your address</p>
              )}
              {/* // <p onClick={() => nevigate("Address")}>Select your address</p> */}
            </div>
          </div>
        </div>
        <div className={styles.Header_middle}>
          <input />
          <div>
            {" "}
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.Header_right}>
          <div className={styles.nav_option}>
            <p>Hello ,{LoginUser ? LoginUser.email : " User"}</p>
            <p onClick={handelSign}>{LoginUser ? "Sign Out" : "Sign In"}</p>
          </div>{" "}
          <div className={styles.nav_option}>
            <p>Returns</p>
            <p>& Orders</p>
          </div>{" "}
          <div className={styles.nav_options}>
            <LocalMallIcon
              className={styles.shopping}
              onClick={Checkcart}
              // onClick={() => nevigate("/checkout")}
            />
            <p className={styles.countNumber}>{user.length}</p>
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <p onClick={GotoTodo}>Super Todo</p>
        <p onClick={GotoSuperMovie}>Super Movie</p>
        <p onClick={GotoWeather}>Super Weather</p>
      </div>
    </div>
  );
}

export default Header;
