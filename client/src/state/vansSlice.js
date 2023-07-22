import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptions: [],
  vanDetails: {},
  vansData: [],
  loading: false,
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
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setFilterOptions, setVansData, setVansDetails, setLoading } =
  vansSlice.actions;
export default vansSlice.reducer;
