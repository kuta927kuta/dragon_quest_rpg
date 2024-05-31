import { createReducer } from "@reduxjs/toolkit";
import {
  getStoreEquipmentRequest,
  getStoreEquipmentSuccess,
  getStoreEquipmentFailure,
} from "../actions";

const initialState = {
  loading: false,
  weapons: [],
  armors: [],
  accessories: [],
  error: null,
};

const equipmentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getStoreEquipmentRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getStoreEquipmentSuccess, (state, action) => {
      state.loading = false;
      state.weapons = action.payload.weapons;
      state.armors = action.payload.armors;
      state.accessories = action.payload.accessories;
      state.error = null;
    })
    .addCase(getStoreEquipmentFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default equipmentReducer;
