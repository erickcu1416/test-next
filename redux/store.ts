import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { headerSlice } from "./slice/headerSlice";
import { loaderSlice } from "./slice/loaderSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [headerSlice.name]: headerSlice.reducer,
      [loaderSlice.name]: loaderSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);