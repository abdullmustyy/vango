import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptions: [],
  error: null,
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    setFilterOptions(state, action) {
      state.filterOptions = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFilterOptions, setError } = vansSlice.actions;
export default vansSlice.reducer;
