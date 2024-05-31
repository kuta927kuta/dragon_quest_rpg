import { createReducer } from "@reduxjs/toolkit";
import {
  setPlayerSuccess,
  getPlayerDetailRequest,
  getPlayerDetailSuccess,
  getPlayerDetailFailure,
} from "../actions";

const initialState = {
  loading: false,
  player: null,
  detail: null,
  error: null,
};

const playerReducer = createReducer(initialState, (builder) => {
  builder
    // プレイヤーをセット
    .addCase(setPlayerSuccess, (state, action) => {
      state.player = action.payload;
    })
    // detail取得
    .addCase(getPlayerDetailRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getPlayerDetailSuccess, (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    })
    .addCase(getPlayerDetailFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default playerReducer;
