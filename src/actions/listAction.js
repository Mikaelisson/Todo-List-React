import { createSlice } from "@reduxjs/toolkit";
import Item from "../components/Item";

const initialState = {
  value: [],
};

export const listSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      let item = new Item(payload);
      let it = { id: item.id, text: item.text, done: item.done };
      state.value = [...state.value, it];
      return state;
    },
    deleteItem: (state, { payload }) => {
      state.value = state.value.filter((item) => item.id !== payload);
      return state;
    },
    changeDone: (state, { payload }) => {
      state.value.map((item) => {
        if (item.id === payload) {
          item.done = !item.done;
        }
        return item;
      });
    },
  },
});

export const { addItem, deleteItem, changeDone } = listSlice.actions;

export default listSlice.reducer;
