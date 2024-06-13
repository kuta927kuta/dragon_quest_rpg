import { createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "./itemStoreAPI";
import axios from "axios";

// アイテム販売リストの取得　※今後はストーリー進行に応じてリストを変える
export const getStoreItem = createAsyncThunk("itemStore/GET-STORE-ITEM-LIST", async () => {
  try {
    const respone = await axios.get(getList);
    return respone.data;
  } catch (error) {
    throw error;
  }
});