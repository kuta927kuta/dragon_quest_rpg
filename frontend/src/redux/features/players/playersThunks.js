import { createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "./playersAPI";
import axios from "axios";

export const getPlayers = createAsyncThunk("players/GET_PLAYERS", async () => {
  try {
    const respone = await axios.get(getList);
    return respone.data;
  } catch (error) {
    throw error;
  }
});
