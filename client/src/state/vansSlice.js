import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFiltered: false,
  filterOptions: [],
  vanDetails: {},
  vansData: [],
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    setIsFiltered(state) {
      state.isFiltered = !state.isFiltered;
    },
    clearFilter(state) {
      state.isFiltered = false;
    },
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
  setIsFiltered,
  clearFilter,
  setFilterOptions,
  setVansData,
  setVansDetails,
} = vansSlice.actions;
export default vansSlice.reducer;
