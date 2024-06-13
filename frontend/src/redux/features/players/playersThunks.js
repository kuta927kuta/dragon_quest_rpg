import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlayers = createAsyncThunk("players/GET_PLAYERS", async () => {
  try {
    const respone = await axios.get("/api/players");
    return respone.data;
  } catch (error) {
    throw error;
  }
});
