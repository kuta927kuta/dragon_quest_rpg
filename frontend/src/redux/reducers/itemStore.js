import { createReducer } from "@reduxjs/toolkit";
import { itemStoreActions } from "../actions/itemStore";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const itemStoreReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(itemStoreActions.getStoreItemRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(itemStoreActions.getStoreItemSuccess, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    })
    .addCase(itemStoreActions.getStoreItemFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default itemStoreReducer;
