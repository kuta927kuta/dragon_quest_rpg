import { combineReducers } from "redux"; // 複数のリデューサーを一つにまとめて一つのルートリデューサーを作成する
import playersReducer from "./players";
import allReducer from "./all";
import playerReducer from "./player";

const rootReducer = combineReducers({
  all: allReducer,
  players: playersReducer,
  player: playerReducer,
});

export default rootReducer;
