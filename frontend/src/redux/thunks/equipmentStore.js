import axios from "axios";
import { equipmentStoreActions } from "../actions/equipmentStore";

// 店の販売する装備を取得
export const getStoreEquipment = () => async (dispatch) => {
  dispatch(equipmentStoreActions.getStoreEquipmentRequest());
  try {
    const response = await axios.get(`/api/get-store-equipment`);
    dispatch(equipmentStoreActions.getStoreEquipmentSuccess(response.data));
  } catch (error) {
    dispatch(equipmentStoreActions.getStoreEquipmentFailure(error.message));
  }
};
