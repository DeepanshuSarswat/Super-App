import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    SelectedCounter: null,
    Address: null,
    basket: [],
    user: null,
    ptmitm: null,
    finalPrice: null,
  },

  reducers: {
    Selectcounter: (state, action) => {
      state.SelectedCounter = action.payload;
      console.log(state.SelectedCounter);
      console.log(state.basket);
      state.basket = [...state.basket, state.SelectedCounter];
      console.log(state.basket);
    },
    userCounter: (state, action) => {
      state.user = action.payload;
    },
    paymentItems: (state, action) => {
      state.ptmitm = action.payload;
    },
    usefinalprices: (state, action) => {
      state.finalPrice = action.payload;
    },
    finalBasket: (state, action) => {
      state.basket = [];
    },
    finalItems: (state, action) => {
      state.SelectedCounter = action.payload;
      console.log(state.SelectedCounter);
      state.basket = state.SelectedCounter;
    },
    CounterAddress: (state, action) => {
      state.Address = action.payload;
    },
  },
});

export const {
  Selectcounter,
  userCounter,
  paymentItems,
  usefinalprices,
  finalBasket,
  finalItems,
  CounterAddress,
} = counterSlice.actions;

export const openCounter = (state) => state.counter.SelectedCounter;
export const userBasket = (state) => state.counter.basket;
export const userUser = (state) => state.counter.user;
export const Selctptmitm = (state) => state.counter.ptmitm;
export const selctfinalprices = (state) => state.counter.finalPrice;
export const selectCounterAddress = (state) => state.counter.Address;
export default counterSlice.reducer;
