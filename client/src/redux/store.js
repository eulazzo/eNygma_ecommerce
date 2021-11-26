import {configureStore} from "@reduxjs/toolkit";
import cartRedux from "./cartRedux";

export const store = configureStore({
  reducer:{
    cart:cartRedux
  }
})