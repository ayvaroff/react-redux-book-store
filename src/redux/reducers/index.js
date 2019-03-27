import { combineReducers } from 'redux'

import books from './books'
import bookstores from './bookstores'

export default combineReducers({
  books,
  bookstores
})
