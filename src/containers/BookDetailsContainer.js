import { connect } from 'react-redux'

import BooksDetails from '../components/BooksDetails'
import * as Actions from '../redux/actions'

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  getBook: (bookId) => dispatch(Actions.getBook(bookId)),
  updateBook: (book) => dispatch(Actions.updateBook(book)),
  removeBook: (bookId) => dispatch(Actions.removeBook(bookId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksDetails)
