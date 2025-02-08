import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    setCount: (state) => (state += 1),
  },
});

export const { setCount } = counterSlice.actions;
export default counterSlice.reducer;
