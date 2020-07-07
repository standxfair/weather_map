import { takeEvery, put, call } from 'redux-saga/effects'
import { putData } from './actions/pointActions';
import { getWeatherRequest } from './helpers/getWeatherRequest';
import { LOAD_POINT_DATA } from '../src/constants/point'
import { putHistoryData } from './actions/historyActions'

function* loadDataWorker(action) {
  const data = yield call(getWeatherRequest(action.payload[0], action.payload[1]))

  yield put(putData(data))

  yield put(putHistoryData(data))
}

export function* watchLoadData() {
  yield takeEvery(LOAD_POINT_DATA, loadDataWorker)
}