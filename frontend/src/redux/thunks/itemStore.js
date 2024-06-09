import axios from "axios";
import { itemStoreActions } from "../actions/itemStore";

// 販売アイテムの取得
export const getStoreItem = () => async (dispatch) => {
  dispatch(itemStoreActions.getStoreItemRequest());
  try {
    const response = await axios.get(`/api/get-store-item`);
    dispatch(itemStoreActions.getStoreItemSuccess(response.data));
  } catch (error) {
    dispatch(itemStoreActions.getStoreItemFailure(error.message));
  }
};
