import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  person: { name: "", age: "" },
  child: [],
  errors: [],
}

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    addChild: (state, action) => {
      state.child.push(action.payload);
    },
    deleteChild: (state, action) => {
      state.child = state.child.filter((el) => el.id !== action.payload);
    },
    setPerson: (state, action) => {
      state.person[action.payload.name] = action.payload.inputValue;
    },
    setChild: (state, action) => {
      const index = state.child.findIndex((el) => el.id === action.payload.id);
      state.child[index][action.payload.name] = action.payload.inputValue;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearError: (state, action) => {
      state.errors = state.errors.filter(err => err !== action.payload);
    }
  }
});

export const { addChild, deleteChild, setPerson, setChild, setErrors, clearError } = inputsSlice.actions;
