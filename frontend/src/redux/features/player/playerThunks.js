import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getDetail, getEquipmentBag, getItemBag, getMaterialBag } from "./playerAPI";
import { calculateStats } from "../../../common/function_common/status";

// プレイヤーステータス取得
export const getPlayerDetail = createAsyncThunk("player/get-detail", async (playerId) => {
  try {
    const respone = await axios.get(getDetail + playerId)
    const afterStatus = calculateStats(respone.data);
    respone.data.status = afterStatus;
    return respone.data;
  } catch (error) {
    throw error;
  }
});
// プレイヤーアイテムバッグ取得
export const getPlayerItemBag = createAsyncThunk("player/get-itemBag", async (playerId) => {
  try {
    const respone = await axios.get(getItemBag + playerId)
    return respone.data;
  } catch (error) {
    throw error;
  }
});
// プレイヤー装備バッグ取得
export const getPlayerEquipmentBag = createAsyncThunk("player/get-equipmentBag", async (playerId) => {
  try {
    const respone = await axios.get(getEquipmentBag + playerId)
    return respone.data;
  } catch (error) {
    throw error;
  }
});
//　プレイヤー素材バッグ取得
export const getPlayerMaterialBag = createAsyncThunk("player/get-materialBag", async (playerId) => {
  try {
    const respone = await axios.get(getMaterialBag + playerId)
    return respone.data;
  } catch (error) {
    throw error;
  }
});

