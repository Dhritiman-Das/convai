import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import emulatorSlice from "./emulatorSlice";

const store = configureStore({
  reducer: {
    emulator: emulatorSlice.reducer,
  },
});

export default store;
