import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  isFiltered: false,
  filterOptions: [],
  vanDetails: {},
  vansData: [],
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    filter(state, action) {
      if (state.filters.some((filter) => filter.type === action.payload.type)) {
        state.isFiltered = state.filters.length > 1 ? true : false;
        state.filters = state.filters.filter(
          (filter) => filter.type !== action.payload.type
        );
      } else {
        state.isFiltered = true;
        state.filters.push(action.payload);
      }
    },
    clearFilter(state) {
      state.filters = [];
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
  filter,
  clearFilter,
  setFilterOptions,
  setVansData,
  setVansDetails,
} = vansSlice.actions;
export default vansSlice.reducer;
