import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  isFiltered: false,
  filterOptions: [],
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    filter(state, action) {
      if (state.filters.includes(action.payload)) {
        state.isFiltered = false;
        state.filters = state.filters.filter(
          (filter) => filter !== action.payload
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
  },
});

export const { filter, clearFilter, setFilterOptions } = vansSlice.actions;
export default vansSlice.reducer;
