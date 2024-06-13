import { createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "./equipmentStoreAPI";
import axios from "axios";

// 装備販売リストの取得　※今後はストーリー進行に応じてリストを変える
export const getStoreEquipment = createAsyncThunk("equipmentStore/GET-STORE-EQUIPMENT-LIST", async () => {
  try {
    const respone = await axios.get(getList)
    return respone.data;
  } catch (error) {
    throw error;
  }
});