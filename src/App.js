import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeComponents from "./components/HomeComponents/HomeComponents";
import CheckoutComponents from "./components/CheckoutComponents/CheckoutComponents";
import LoginPage from "./components/LoginPage/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { userUser } from "./features/counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userCounter } from "./features/counterSlice";
import HderPayment from "./components/HderPayment/HderPayment";
import Address from "./components/AddressPage/Address";
import ThankyouPage from "./components/ThankyouPage/ThankyouPage";

function App() {
  const user = useSelector(userUser);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      if (authUser) {
        console.log("user just login");
        dispatch(userCounter(authUser));
      } else {
        console.log("user is loggedOut");
        dispatch(userCounter(null));
      }
    });
  }, []);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/checkout/Address" element={<Address />} />
          <Route path="/payment/Address" element={<Address />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutComponents />} />
          <Route path="/payment" element={<HderPayment />} />
          <Route path="/ThankyouPage" element={<ThankyouPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
