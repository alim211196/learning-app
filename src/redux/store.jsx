import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./slices/authSlice";
const store = configureStore({
  reducer: {
    count: counterReducer,
    auth: authReducer,
  },
});

export default store;
