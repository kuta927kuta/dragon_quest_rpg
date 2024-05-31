import axios from "axios";
import {
  setPlayerSuccess,
  getPlayerDetailFailure,
  getPlayerDetailRequest,
  getPlayerDetailSuccess,
} from "../actions";
import { calculateStats } from "../../common/function_common/status";

export const setPlayer = (player) => async (dispatch) => {
  dispatch(setPlayerSuccess(player));
};

export const getPlayerDetail = (playerId) => async (dispatch) => {
  dispatch(getPlayerDetailRequest());
  try {
    const response = await axios.get(`/api/get-player-detail/${playerId}`);
    //ここで装備のパラメータも足したオブジェを返す
    const afterStatus = calculateStats(response.data);
    response.data.status = afterStatus;
    dispatch(getPlayerDetailSuccess(response.data));
  } catch (error) {
    dispatch(getPlayerDetailFailure(error.message));
  }
};
