import React, { useState } from "react";
import styles from "./AddressPage.module.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  CounterAddress,
  selectCounterAddress,
} from "../../features/counterSlice";
function Address() {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [country, setcountry] = useState("");
  const [firstName, setfirestName] = useState("");
  const [lastName, setlastName] = useState("");
  // textarea
  const [Streetnumber, setStreetnumber] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PINCode, setPINCode] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  let address = useSelector(selectCounterAddress);
  const Addaddress = (e) => {
    e.preventDefault();
    dispatch(
      CounterAddress({
        country,
        firstName,
        lastName,
        Streetnumber,
        City,
        State,
        PINCode,
        Phonenumber,
      })
    );
    nevigate("/");
  };
  console.log(address);
  return (
    <div className={styles.login}>
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className={styles.login__container}>
        <h1>Add your address</h1>

        <form>
          <h5>Country/Region</h5>
          <input
            type="text"
            value={country}
            required
            onChange={(e) => setcountry(e.target.value)}
          />

          <h5>First Name</h5>
          <input
            required
            type="text"
            value={firstName}
            onChange={(e) => setfirestName(e.target.value)}
          />
          <h5>Last Name</h5>
          <input
            required
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />

          <h5>Street number</h5>
          <input
            required
            type="text"
            value={Streetnumber}
            onChange={(e) => setStreetnumber(e.target.value)}
          />

          <h5>City</h5>
          <input
            type="text"
            required
            value={City}
            onChange={(e) => setCity(e.target.value)}
          />

          <h5>State / Province / Region</h5>
          <input
            type="text"
            required
            value={State}
            onChange={(e) => setState(e.target.value)}
          />
          <h5>PIN Code</h5>
          <input
            type="text"
            required
            value={PINCode}
            onChange={(e) => setPINCode(e.target.value)}
          />

          <h5>Phone number</h5>
          <input
            type="text"
            required
            value={Phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />

          <button
            type="submit"
            onClick={Addaddress}
            className={styles.login__signInButton}
          >
            Add address
          </button>
        </form>
      </div>
    </div>
  );
}

export default Address;

// function Login() {

//   const signIn = (e) => {
//     e.preventDefault();

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((auth) => {
//         nevigate("/");
//       })
//       .catch((error) => alert(error.message));
//   };

//   const register = (e) => {
//     e.preventDefault();

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         // it successfully created a new user with email and password
//         if (auth) {
//           nevigate("/");
//         }
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (

//   );
// }

// export default Login;
