import { combineReducers } from 'redux';
import { dashboardReducer } from '../containers/dashboard/reducer';
import { leaguePageReducer } from '../containers/leaguePage/reducer';

const reducers = combineReducers({
  dashboardReducer,
  leaguePageReducer,
});

export default reducers;
