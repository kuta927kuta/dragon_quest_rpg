import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPlayersRequest,
  fetchPlayersSuccess,
  fetchPlayersFailure,
} from "../actions";

const initialState = {
  loading: false,
  players: null,
  error: null,
};

const playersReducer = createReducer(initialState, (builder) => {
  builder
    // リクエスト
    .addCase(fetchPlayersRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    // サクセス
    .addCase(fetchPlayersSuccess, (state, action) => {
      state.loading = false;
      state.players = action.payload;
    })
    // エラー
    .addCase(fetchPlayersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default playersReducer;
