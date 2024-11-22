import { configureStore } from "@reduxjs/toolkit";
import { thunk, ThunkMiddleware } from "redux-thunk";

import reducer from "./reducer/reducer";

export const store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk as unknown  as ThunkMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
