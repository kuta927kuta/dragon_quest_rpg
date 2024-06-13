import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "../rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // redux-loggerをミドルウェアに追加
  devTools: process.env.NODE_ENV !== "production", // 開発環境でのみ有効化
});

export default store;
