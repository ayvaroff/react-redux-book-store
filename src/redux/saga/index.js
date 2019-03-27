import { takeEvery } from 'redux-saga/effects'

import * as ActionTypes from '../actions'

import getBookStoresSaga from './bookstores'
import * as booksSaga from './books'

export default function* rootSaga() {
  yield [
    yield takeEvery(ActionTypes.ALL_BOOKS_REQUEST, booksSaga.getAllBooksSaga),
    yield takeEvery(ActionTypes.BOOK_REQUEST, booksSaga.getBookSaga),
    yield takeEvery(ActionTypes.BOOK_ADD_REQUEST, booksSaga.addBookSaga),
    yield takeEvery(ActionTypes.BOOK_UPDATE_REQUEST, booksSaga.updateBookSaga),
    yield takeEvery(ActionTypes.BOOK_REMOVE_REQUEST, booksSaga.removeBookSaga),
    yield takeEvery(ActionTypes.BOOKSTORE_REQUEST, getBookStoresSaga)
  ]
}
