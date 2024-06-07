import axios from "axios";
import { playerActions } from "../actions/player";
import { calculateStats } from "../../common/function_common/status";

// プレイヤー一時保存
export const setPlayer = (player) => async (dispatch) => {
  dispatch(playerActions.setPlayerSuccess(player));
};
// ステータス保存
export const setPlayerDetail = (detail) => async (dispatch) => {
  dispatch(playerActions.setPlayerDetail(detail));
};
// バッグ類保存
export const setItemBag = (data) => async (dispatch) => {
  dispatch(playerActions.setItemBag(data));
};
export const setEquipmentBag = (data) => async (dispatch) => {
  dispatch(playerActions.setEquipmentBag(data));
};
export const setMaterialBag = (data) => async (dispatch) => {
  dispatch(playerActions.setMaterialBag(data));
};

export const getPlayerDetail = (playerId) => async (dispatch) => {
  dispatch(playerActions.getPlayerDetailRequest());
  try {
    const response = await axios.get(`/api/get-player-detail/${playerId}`);
    //ここで装備のパラメータも足したオブジェを返す
    const afterStatus = calculateStats(response.data);
    response.data.status = afterStatus;
    dispatch(playerActions.getPlayerDetailSuccess(response.data));
  } catch (error) {
    dispatch(playerActions.getPlayerDetailFailure(error.message));
  }
};

// アイテムバッグの取得
export const getItemBag = (playerId) => async (dispatch) => {
  dispatch(playerActions.getItemBagRequest());
  try {
    const response = await axios.get(`/api/get-player-item-bag/${playerId}`);
    dispatch(playerActions.getItemBagSuccess(response.data));
  } catch (error) {
    dispatch(playerActions.getItemBagFailure(error.message));
  }
};

// 装備バッグの取得
export const getEquipmentBag = (playerId) => async (dispatch) => {
  dispatch(playerActions.getEquipmentBagRequest());
  try {
    const response = await axios.get(
      `/api/get-player-equipment-bag/${playerId}`
    );
    dispatch(playerActions.getEquipmentBagSuccess(response.data));
  } catch (error) {
    dispatch(playerActions.getEquipmentBagFailure(error.message));
  }
};

// 素材バッグの取得
export const getMaterialBag = (playerId) => async (dispatch) => {
  dispatch(playerActions.getMaterialBagRequest());
  try {
    const response = await axios.get(
      `/api/get-player-material-bag/${playerId}`
    );
    dispatch(playerActions.getMaterialBagSuccess(response.data));
  } catch (error) {
    dispatch(playerActions.getMaterialBagFailure(error.message));
  }
};
