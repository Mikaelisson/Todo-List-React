import { createSlice } from "@reduxjs/toolkit";
import Item from "../components/Item";

const SAVED_ITEMS = "savedItems";

const persistState = (state) => {
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
};

const loadState = () => {
  let savedItems = localStorage.getItem(SAVED_ITEMS);
  if (savedItems) return JSON.parse(savedItems);
  else return [];
};

const initialState = {
  value: loadState(),
};

export const listSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      let item = new Item(payload);
      let it = { id: item.id, text: item.text, done: item.done };
      state.value = [...state.value, it];
      persistState(state.value);
      return state;
    },
    deleteItem: (state, { payload }) => {
      state.value = state.value.filter((item) => item.id !== payload);
      persistState(state.value);
      return state;
    },
    changeDone: (state, { payload }) => {
      state.value.map((item) => {
        if (item.id === payload) {
          item.done = !item.done;
        }
        return item;
      });
      persistState(state.value);
    },
  },
});

export const { addItem, deleteItem, changeDone } = listSlice.actions;

export default listSlice.reducer;
