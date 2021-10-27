import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  person: {},
  child: []
};

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setPreviewData: (state, action) => {
      state.person = action.payload.person;
      state.child = action.payload.child;
    }
  }
});

export const { setPreviewData } = previewSlice.actions;
