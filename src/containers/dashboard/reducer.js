import {
  REQUEST_ALL_ITEMS,
  RECEIVE_ALL_ITEMS,
  REQUEST_ALL_ITEMS_FAIL
} from "./constants";

export const initialState = {
  items: [],
  loadingItems: false,
  error: false
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ALL_ITEMS:
      return {
        ...state,
        items: [],
        loadingItems: true,
        error: false
      };
    case RECEIVE_ALL_ITEMS:
      return {
        ...state,
        loadingItems: false,
        items: action.items
      };
    case REQUEST_ALL_ITEMS_FAIL:
      return {
        ...state,
        loadingItems: true,
        error: action.error
      };
    default:
      return state;
  }
};
