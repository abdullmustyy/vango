import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptions: [],
  vanDetails: {},
  error: null,
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
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFilterOptions, setVansDetails, setError } = vansSlice.actions;
export default vansSlice.reducer;
