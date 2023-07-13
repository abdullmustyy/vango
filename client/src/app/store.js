import { configureStore } from "@reduxjs/toolkit";
import vansReducer from "../state/vansSlice";

export const store = configureStore({
  reducer: { vans: vansReducer },
});
