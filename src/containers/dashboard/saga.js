import { takeLatest, put, call } from 'redux-saga/effects';
import request from '../../utils/request';
import { REQUEST_ALL_ITEMS } from './constants';
import { receiveAllItems, requestAllItemsFail } from './actions';

function* requestAllItems() {
  try {
    const response = yield call(request, `/api/proMatches`, {
      method: 'GET',
    });
    yield put(receiveAllItems(response));
  } catch (error) {
    let errorMessage = yield error.response.json();
    errorMessage = errorMessage.msg;
    yield put(requestAllItemsFail(errorMessage));
  }
}

function* dashboardSaga() {
  yield takeLatest(REQUEST_ALL_ITEMS, requestAllItems);
}

export default dashboardSaga;
