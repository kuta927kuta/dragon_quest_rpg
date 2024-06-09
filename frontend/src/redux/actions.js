import { createAction } from "@reduxjs/toolkit";

// 全体画面
export const allLoadingOn = createAction("ALL_LOADING_ON");
export const allLoadingOff = createAction("ALL_LOADING_OFF");

// players取得
export const fetchPlayersRequest = createAction("FETCH_PLAYERS_REQUEST");
export const fetchPlayersSuccess = createAction("FETCH_PLAYERS_SUCCESS");
export const fetchPlayersFailure = createAction("FETCH_PLAYERS_FAILURE");


