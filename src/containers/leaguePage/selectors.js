import { createSelector } from 'reselect';
import { initialState } from './reducer';

const leaguePageState = ({ leaguePageReducer }) =>
  leaguePageReducer || initialState;

const createMakeSelector = (key) => () =>
  createSelector(leaguePageState, (state) => state[key]);

export const makeSelectAllItems = createMakeSelector('items');
export const makeSelectLoadingItems = createMakeSelector('loadingItems');
export const makeSelectAllItemsError = createMakeSelector('error');
