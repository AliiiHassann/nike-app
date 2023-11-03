import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./slices/PopularSlice";

export const Store = configureStore({
  reducer: {
    cart: PopularSlice,
  },
});
