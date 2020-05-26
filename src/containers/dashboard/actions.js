import {
  REQUEST_ALL_ITEMS,
  RECEIVE_ALL_ITEMS,
  REQUEST_ALL_ITEMS_FAIL
} from "./constants";

export const requestAllItems = () => ({
  type: REQUEST_ALL_ITEMS
});

export const receiveAllItems = items => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const requestAllItemsFail = error => ({
  type: REQUEST_ALL_ITEMS_FAIL,
  error
});
