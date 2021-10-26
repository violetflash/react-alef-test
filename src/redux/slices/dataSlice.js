import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  childNum: 0,
}

export const dataSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    addChild: (state) => {
      state.childNum++;
    },
  }
});

export const { addChild } = dataSlice.actions;