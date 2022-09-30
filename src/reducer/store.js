import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../actions/listAction";

export const store = configureStore({
    reducer: {
        todo: listReducer
    }
})
