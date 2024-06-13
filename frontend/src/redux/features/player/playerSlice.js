import { createSlice } from "@reduxjs/toolkit";
import { getPlayerDetail, getPlayerItemBag, getPlayerEquipmentBag, getPlayerMaterialBag } from "./playerThunks";

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
    // プレイヤーセット
    setPlayer(state, action) {
      state.player = action.payload;
    },
    // プレイヤー詳細セット
    setPlayerDetail(state, action) {
      state.detail = action.payload;
    },
    // バッグ類保存
    setItemBag(state, action) {
      state.itemBag = action.payload;
    },
    setEquipmentBag(state, action) {
      state.equipmentBag = action.payload;
    },
    setMaterialBag(state, action) {
      state.materialBag = action.payload;
    },
  },
  // createAsyncThunk で生成されたアクションの状態更新
  extraReducers: (builder) => {
    builder
      // 詳細ステータス取得
      .addCase(getPlayerDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlayerDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(getPlayerDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // アイテムバッグ取得
      .addCase(getPlayerItemBag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlayerItemBag.fulfilled, (state, action) => {
        state.loading = false;
        state.itemBag = action.payload;
      })
      .addCase(getPlayerItemBag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 装備バッグ取得
      .addCase(getPlayerEquipmentBag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlayerEquipmentBag.fulfilled, (state, action) => {
        state.loading = false;
        state.equipmentBag = action.payload;
      })
      .addCase(getPlayerEquipmentBag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 素材バッグ取得
      .addCase(getPlayerMaterialBag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlayerMaterialBag.fulfilled, (state, action) => {
        state.loading = false;
        state.materialBag = action.payload;
      })
      .addCase(getPlayerMaterialBag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setPlayer,
  setPlayerDetail,
  setItemBag,
  setEquipmentBag,
  setMaterialBag,
} = playerSlice.actions;

export default playerSlice.reducer;
