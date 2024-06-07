import { createReducer } from "@reduxjs/toolkit";
import { playerActions } from "../actions/player";

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

const playerReducer = createReducer(initialState, (builder) => {
  builder
    // プレイヤーを一時セット
    .addCase(playerActions.setPlayerSuccess, (state, action) => {
      state.player = action.payload;
    })
    // detail一時保存
    .addCase(playerActions.setPlayerDetail, (state, action) => {
      state.detail = action.payload;
    })
    // バッグ等保存
    .addCase(playerActions.setItemBag, (state, action) => {
      state.itemBag = action.payload;
    })
    .addCase(playerActions.setEquipmentBag, (state, action) => {
      state.equipmentBag = action.payload;
    })
    .addCase(playerActions.setMaterialBag, (state, action) => {
      state.materialBag = action.payload;
    })

    // detail取得
    .addCase(playerActions.getPlayerDetailRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(playerActions.getPlayerDetailSuccess, (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    })
    .addCase(playerActions.getPlayerDetailFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // 装備バッグ取得
    .addCase(playerActions.getEquipmentBagRequest, (state) => {
      state.loadingBag = true;
      state.error = null;
    })
    .addCase(playerActions.getEquipmentBagSuccess, (state, action) => {
      state.loadingBag = false;
      state.equipmentBag = action.payload;
    })
    .addCase(playerActions.getEquipmentBagFailure, (state, action) => {
      state.loadingBag = false;
      state.error = action.payload;
    })

    // アイテムバッグ取得
    .addCase(playerActions.getItemBagRequest, (state) => {
      state.loadingBag = true;
      state.error = null;
    })
    .addCase(playerActions.getItemBagSuccess, (state, action) => {
      state.loadingBag = false;
      state.itemBag = action.payload;
    })
    .addCase(playerActions.getItemBagFailure, (state, action) => {
      state.loadingBag = false;
      state.error = action.payload;
    })

    // 素材バッグ取得
    .addCase(playerActions.getMaterialBagRequest, (state) => {
      state.loadingBag = true;
      state.error = null;
    })
    .addCase(playerActions.getMaterialBagSuccess, (state, action) => {
      state.loadingBag = false;
      state.materialBag = action.payload;
    })
    .addCase(playerActions.getMaterialBagFailure, (state, action) => {
      state.loadingBag = false;
      state.error = action.payload;
    });
});

export default playerReducer;
