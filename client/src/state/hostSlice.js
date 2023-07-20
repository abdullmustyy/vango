import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hostVansData: [],
  hostVanDetails: {},
};

const hostSlice = createSlice({
  name: "host",
  initialState,
  reducers: {
    setHostVansData(state, action) {
      state.hostVansData = action.payload;
    },
    setHostVanDetails(state, action) {
      state.hostVanDetails = action.payload;
    },
  },
});

export const { setHostVansData, setHostVanDetails } = hostSlice.actions;
export default hostSlice.reducer;
