import { connect } from 'react-redux'

import BooksList from '../components/BooksList'
import * as Actions from '../redux/actions'

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  getAllBooks: () => dispatch(Actions.getAllBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList)
