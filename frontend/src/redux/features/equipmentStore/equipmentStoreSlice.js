import { createSlice } from "@reduxjs/toolkit"
import { getStoreEquipment } from "./equipmentStoreThunks";

const initialState = {
  loading: false,
  weapons: [],
  armors: [],
  accessorys: [],
  error: null,
};

const equipmentStoreSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // 単純なアクション
  },
  // createAsyncThunk で生成されたアクションの状態更新
  extraReducers: (builder) => {
    builder
      // 各販売装備のリストを取得
      .addCase(getStoreEquipment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreEquipment.fulfilled, (state, action) => {
        state.loading = false;
        state.weapons = action.payload.weapons;
        state.armors = action.payload.armors;
        state.accessorys = action.payload.accessorys;
        state.error = null;
      })
      .addCase(getStoreEquipment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { } = equipmentStoreSlice.actions;

export default equipmentStoreSlice.reducer;