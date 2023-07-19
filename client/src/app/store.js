import { configureStore } from "@reduxjs/toolkit";
import vansReducer from "../state/vansSlice";
import hostReducer from "../state/hostSlice";

export const store = configureStore({
  reducer: { vans: vansReducer, host: hostReducer },
});
