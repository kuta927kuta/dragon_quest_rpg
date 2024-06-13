import { createSlice } from "@reduxjs/toolkit"
import { getStoreItem } from "./itemStoreThunks";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const itemStoreSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // 単純なアクション
  },
  // createAsyncThunk で生成されたアクションの状態更新
  extraReducers: (builder) => {
    builder
      // 各販売装備のリストを取得
      .addCase(getStoreItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getStoreItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { } = itemStoreSlice.actions;

export default itemStoreSlice.reducer;