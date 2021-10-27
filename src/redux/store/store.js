import { configureStore } from '@reduxjs/toolkit';
import { inputsSlice } from "../slices/inputsSlice";
import { previewSlice } from "../slices/previewSlice";

export const store = configureStore({
  reducer: {
    inputsData: inputsSlice.reducer,
    previewData: previewSlice.reducer
  }
});
