import { all, fork } from 'redux-saga/effects';
import dashboardSaga from '../containers/dashboard/saga';
import leaguePageSaga from '../containers/leaguePage/saga';

function* rootSaga() {
  yield all([fork(dashboardSaga), fork(leaguePageSaga)]);
}

export default rootSaga;
