import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptions: [],
  vanDetails: {},
  vansData: [],
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    setFilterOptions(state, action) {
      state.filterOptions = action.payload;
    },
    setVansDetails(state, action) {
      state.vanDetails = action.payload;
    },
    setVansData(state, action) {
      state.vansData = action.payload;
    },
  },
});

export const {
  setFilterOptions,
  setVansData,
  setVansDetails,
} = vansSlice.actions;
export default vansSlice.reducer;
