import { configureStore } from "@reduxjs/toolkit";
import GifItem from "./GifItem";
export const store = configureStore({
  reducer: {
    counter: GifItem.reducer
  }
});
