import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../types";

export type HomePageType = {
  products: Array<productsType>;
  isLoading: boolean;
};

const initialState: HomePageType = {
  products: [],
  isLoading: false,
};

const home = createSlice({
  name: "@home",
  initialState,
  reducers: {
    getAll: (state: Draft<HomePageType>) => {
      state.isLoading = true;
    },
    getAllSuccess: (
      state: Draft<HomePageType>,
      action: PayloadAction<Array<productsType>>
    ) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const { reducer, actions } = home;
export default reducer;
