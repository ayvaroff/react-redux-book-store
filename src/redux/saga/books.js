import { call, put } from 'redux-saga/effects'
import * as Api from '../middleware/api'
import * as ActionTypes from '../actions'

export function* getAllBooksSaga() {
	try {
		const result = yield call(Api.getAllBooks)
		yield put({ type: ActionTypes.ALL_BOOKS_SUCCESS, payload: result })
	} catch (error) {
		yield put({ type: ActionTypes.ALL_BOOKS_FAILURE })
	}
}

export function* getBookSaga(payload) {
	try {
		const result = yield call(Api.getBook, payload.bookId)
		yield put({ type: ActionTypes.BOOK_SUCCESS, payload: result })
	} catch (error) {
		yield put({ type: ActionTypes.BOOK_FAILURE })
	}
}

export function* addBookSaga(payload) {
	try {
		const result = yield call(Api.addBook, payload.book)
		yield put({ type: ActionTypes.BOOK_ADD_SUCCESS, payload: result })
	} catch (error) {
		yield put({ type: ActionTypes.BOOK_ADD_FAILURE })
	}
}

export function* updateBookSaga(payload) {
	try {
		const result = yield call(Api.updateBook, payload.book)
		yield put({ type: ActionTypes.BOOK_UPDATE_SUCCESS, payload: result })
	} catch (error) {
		yield put({ type: ActionTypes.BOOK_UPDATE_FAILURE })
	}
}

export function* removeBookSaga(payload) {
	try {
		const result = yield call(Api.removeBook, payload.bookId)
		yield put({ type: ActionTypes.BOOK_REMOVE_SUCCESS, payload: result })
	} catch (error) {
		yield put({ type: ActionTypes.BOOK_REMOVE_FAILURE })
	}
}
