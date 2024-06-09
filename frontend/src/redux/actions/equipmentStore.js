import { createAction } from "@reduxjs/toolkit"; // 関数内で非同期処理を行える

// 販売装備取得
const getStoreEquipmentRequest = createAction(
  "GET_STORE_EQUIPMENT_REQUEST"
);
const getStoreEquipmentSuccess = createAction(
  "GET_STORE_EQUIPMENT_SUCCESS"
);
const getStoreEquipmentFailure = createAction(
  "GET_STORE_EQUIPMENT_FAILURE"
);

export const equipmentStoreActions = {
  getStoreEquipmentRequest,
  getStoreEquipmentSuccess,
  getStoreEquipmentFailure,
};
