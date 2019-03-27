import { connect } from 'react-redux'

import BookStoresList from '../components/BookStoresList'
import * as Actions from '../redux/actions'

const mapStateToProps = state => ({
  bookstores: state.bookstores
})

const mapDispatchToProps = dispatch => ({
  getAllBookStores: () => dispatch(Actions.getAllBookStores())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookStoresList)
