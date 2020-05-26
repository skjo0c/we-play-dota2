import { createSelector } from "reselect";
import { initialState } from "./reducer";

const dashboardState = ({ dashboardReducer }) =>
  dashboardReducer || initialState;

const createMakeSelector = key => () =>
  createSelector(
    dashboardState,
    state => state[key]
  );

export const makeSelectAllItems = createMakeSelector("items");
export const makeSelectLoadingItems = createMakeSelector("loadingItems");
export const makeSelectAllItemsError = createMakeSelector("error");
