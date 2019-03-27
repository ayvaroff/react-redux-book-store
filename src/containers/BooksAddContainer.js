import { connect } from 'react-redux'

import BooksAdd from '../components/BooksAdd'
import * as Actions from '../redux/actions'

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  addBook: (book) => dispatch(Actions.addBook(book))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksAdd)
