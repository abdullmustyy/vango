import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hostVansData: [],
};

const hostSlice = createSlice({
  name: "host",
  initialState,
  reducers: {
    setHostVansData(state, action) {
      state.hostVansData = action.payload;
    },
  },
});

export const { setHostVansData } = hostSlice.actions;
export default hostSlice.reducer;
