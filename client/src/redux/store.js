import { configureStore } from "@reduxjs/toolkit";
import cartRedux from "./cartRedux";
import userReducer from "./userRedux";

export const store = configureStore({
  reducer: {
    cart: cartRedux,
    user: userReducer,
  },
});
