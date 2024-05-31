import { createReducer } from "@reduxjs/toolkit";
import { allLoadingOff, allLoadingOn } from "../actions";

const initialState = {
  loading: false,
};

const allReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(allLoadingOn, (state) => {
      state.loading = true;
    })
    .addCase(allLoadingOff, (state) => {
      state.loading = false;
    });
});

export default allReducer;
