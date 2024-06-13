import { combineReducers } from "redux"; // 複数のリデューサーを一つにまとめて一つのルートリデューサーを作成する
// import playersReducer from "./players";
import allReducer from "./all";
import playerReducer from "./player";
import equipmentStoreReducer from "./equipmentStore";
import itemStoreReducer from "./itemStore";
// slice
import playersReducer from "../features/players/playersSlice";

const rootReducer = combineReducers({
  all: allReducer,
  players: playersReducer,
  player: playerReducer,
  equipmentStore: equipmentStoreReducer,
  itemStore: itemStoreReducer,
});

export default rootReducer;
