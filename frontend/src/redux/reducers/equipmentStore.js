import { createReducer } from "@reduxjs/toolkit";
import { equipmentStoreActions } from "../actions/equipmentStore";

const initialState = {
  loading: false,
  weapons: [],
  armors: [],
  accessorys: [],
  error: null,
};

const equipmentStoreReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(equipmentStoreActions.getStoreEquipmentRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(equipmentStoreActions.getStoreEquipmentSuccess, (state, action) => {
      state.loading = false;
      state.weapons = action.payload.weapons;
      state.armors = action.payload.armors;
      state.accessorys = action.payload.accessorys;
      state.error = null;
    })
    .addCase(equipmentStoreActions.getStoreEquipmentFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default equipmentStoreReducer;
