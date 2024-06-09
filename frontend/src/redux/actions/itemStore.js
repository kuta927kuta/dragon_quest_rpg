import { createAction } from "@reduxjs/toolkit"; // 関数内で非同期処理を行える

// 販売アイテム取得
const getStoreItemRequest = createAction(
  "GET_STORE_ITEM_REQUEST"
);
const getStoreItemSuccess = createAction(
  "GET_STORE_ITEM_SUCCESS"
);
const getStoreItemFailure = createAction(
  "GET_STORE_ITEM_FAILURE"
);

export const itemStoreActions = {
  getStoreItemRequest,
  getStoreItemSuccess,
  getStoreItemFailure,
};
