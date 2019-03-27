import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const BookEditor = (props) => (
  <form onSubmit={props.onSubmit} className="book-edit-form" >
    <label htmlFor="title">
      <span>Title:</span>
      <input id="title" type="text" value={props.book.title} onChange={props.onChange} />
    </label>
    <label htmlFor="author">
      <span>Author:</span>
      <input id="author" type="text" value={props.book.author} onChange={props.onChange} />
    </label>
    <label htmlFor="isbn">
      <span>ISBN:</span>
      <input id="isbn" type="text" value={props.book.isbn} onChange={props.onChange} />
    </label>
    <label htmlFor="about">
      <span>About:</span>
      <textarea id="about" type="text" value={props.book.about} onChange={props.onChange} />
    </label>
    <button type="submit">{props.submitText}</button>
  </form>
)

BookEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  }),
  submitText: PropTypes.string.isRequired
}

export default BookEditor
