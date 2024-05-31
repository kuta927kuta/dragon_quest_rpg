import axios from "axios";
import {
  getStoreEquipmentRequest,
  getStoreEquipmentSuccess,
  getStoreEquipmentFailure,
} from "../actions";

// 店の販売する装備を取得
export const getStoreEquipment = () => async (dispatch) => {
  dispatch(getStoreEquipmentRequest());
  try {
    const response = await axios.get(`/api/get-store-equipment`);
    dispatch(getStoreEquipmentSuccess(response.data));
  } catch (error) {
    dispatch(getStoreEquipmentFailure(error.message));
  }
};
