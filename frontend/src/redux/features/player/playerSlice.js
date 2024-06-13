import { createSlice } from "@reduxjs/toolkit";
// import { getPlayers } from "./playersThunks";

const initialState = {
  loading: false,
  loadingBag: false,
  player: null,
  detail: null,
  equipmentBag: [],
  itemBag: [],
  materialBag: [],
  error: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerSuccess(state, action) {
      state.player = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // get
  //     .addCase(getPlayers.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(getPlayers.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.players = action.payload;
  //       state.error = null;
  //     })
  //     .addCase(getPlayers.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { setPlayerSuccess } = playerSlice.actions;

export default playerSlice.reducer;
