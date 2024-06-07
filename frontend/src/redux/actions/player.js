import { createAction } from "@reduxjs/toolkit"; // 関数内で非同期処理を行える

//プレイヤーセット
const setPlayerSuccess = createAction("SET_PLAYER");
// detail一時保存
const setPlayerDetail = createAction("SET_PLAYER_DETAIL");
// バッグ一時保存
const setItemBag = createAction("SET_ITEM_BAG");
const setEquipmentBag = createAction("SET_EQUIPMENT_BAG");
const setMaterialBag = createAction("SET_MATERIAL_BAG");

// detail取得
const getPlayerDetailRequest = createAction("GET_PLAYER_DETAIL_REQUEST");
const getPlayerDetailSuccess = createAction("GET_PLAYER_DETAIL_SUCCESS");
const getPlayerDetailFailure = createAction("GET_PLAYER_DETAIL_FAILURE");
// 各バッグ取得
const getItemBagRequest = createAction("GET_ITEM_BAG_REQUEST");
const getItemBagSuccess = createAction("GET_ITEM_BAG_SUCCESS");
const getItemBagFailure = createAction("GET_ITEM_BAG_FAILURE");
const getEquipmentBagRequest = createAction("GET_EQUIPMENT_BAG_REQUEST");
const getEquipmentBagSuccess = createAction("GET_EQUIPMENT_BAG_SUCCESS");
const getEquipmentBagFailure = createAction("GET_EQUIPMENT_BAG_FAILURE");
const getMaterialBagRequest = createAction("GET_MATERIAL_BAG_REQUEST");
const getMaterialBagSuccess = createAction("GET_MATERIAL_BAG_SUCCESS");
const getMaterialBagFailure = createAction("GET_MATERIAL_BAG_FAILURE");

export const playerActions = {
  setPlayerSuccess,
  setPlayerDetail,
  setItemBag,
  setEquipmentBag,
  setMaterialBag,
  //
  getPlayerDetailRequest,
  getPlayerDetailSuccess,
  getPlayerDetailFailure,
  getItemBagRequest,
  getItemBagSuccess,
  getItemBagFailure,
  getEquipmentBagRequest,
  getEquipmentBagSuccess,
  getEquipmentBagFailure,
  getMaterialBagRequest,
  getMaterialBagSuccess,
  getMaterialBagFailure,
};
