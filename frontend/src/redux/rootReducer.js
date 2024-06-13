import { combineReducers } from "redux"; // 複数のリデューサーを一つにまとめて一つのルートリデューサーを作成する
// slice
import playersReducer from "./features/players/playersSlice";
import playerSlice from "./features/player/playerSlice";
import equipmentStoreSlice from "./features/equipmentStore/equipmentStoreSlice";
import itemStoreSlice from "./features/itemStore/itemStoreSlice";

const rootReducer = combineReducers({
  players: playersReducer,
  player: playerSlice,
  equipmentStore: equipmentStoreSlice,
  itemStore: itemStoreSlice,
});

export default rootReducer;
