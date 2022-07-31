import { AppState } from "../../../store/reducer";
import { productsType } from "../types";

export const getAllProducts = (state: AppState): Array<productsType> => state.home.products