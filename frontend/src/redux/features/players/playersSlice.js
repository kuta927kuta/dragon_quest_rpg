import { createSlice } from "@reduxjs/toolkit";
import { getPlayers } from "./playersThunks";

const initialState = {
  loading: false,
  players: null,
  error: null,
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlayers.pending, (state) => {
        console.log("iiiii");
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        console.log("aaaa");
        state.loading = false;
        state.players = action.payload;
        state.error = null;
      })
      .addCase(getPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default playersSlice.reducer;
