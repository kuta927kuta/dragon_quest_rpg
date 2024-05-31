import { createAction } from "@reduxjs/toolkit";

// 全体画面
export const allLoadingOn = createAction("ALL_LOADING_ON");
export const allLoadingOff = createAction("ALL_LOADING_OFF");

// players取得
export const fetchPlayersRequest = createAction("FETCH_PLAYERS_REQUEST");
export const fetchPlayersSuccess = createAction("FETCH_PLAYERS_SUCCESS");
export const fetchPlayersFailure = createAction("FETCH_PLAYERS_FAILURE");

// player色々
export const setPlayerSuccess = createAction("SET_PLAYER");
export const getPlayerDetailRequest = createAction("GET_PLAYER_DETAIL_REQUEST");
export const getPlayerDetailSuccess = createAction("GET_PLAYER_DETAIL_SUCCESS");
export const getPlayerDetailFailure = createAction("GET_PLAYER_DETAIL_FAILURE");

// 装備取得（店）
export const getStoreEquipmentRequest = createAction(
  "GET_STORE_EQUIPMENT_REQUEST"
);
export const getStoreEquipmentSuccess = createAction(
  "GET_STORE_EQUIPMENT_SUCCESS"
);
export const getStoreEquipmentFailure = createAction(
  "GET_STORE_EQUIPMENT_FAILURE"
);
