import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/CouterSlice";
export const store = configureStore({
  reducer: counterReducer,
});
