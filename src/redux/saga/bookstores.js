import { call, put } from 'redux-saga/effects'
import * as Api from '../middleware/api'
import * as ActionTypes from '../actions'

export default function* getBookStoresSaga() {
  try {
    const result = yield call(Api.getAllBookStores)
    yield put({type: ActionTypes.BOOKSTORE_SUCCESS, payload: result})
  } catch(err) {
    yield put({type: ActionTypes.BOOKSTORE_FAILURE})
  }
}
