import { combineReducers } from "@reduxjs/toolkit";
import home from "../features/HomePage/ducks";

export const rootReducer = combineReducers({
  home,
});

export type AppState = ReturnType<typeof rootReducer>;
