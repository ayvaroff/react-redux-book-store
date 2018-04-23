import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import BookCard from '../BookCard';
import BookEditor from '../BookEditor';

const initBookState = {
    id: '',
    title: '',
    author: '',
    isbn: '',
    about: ''
}

class BooksDetails extends React.Component {
    constructor(props) {
        super(props);

        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.state = {
            editMode: false,
            bookId: this.props.match.params.bookid,
            book: initBookState
        }
    }

    componentDidMount() {
        let book = this.props.books.items.find(item => item.id === this.state.bookId);
        if (!book) {
            this.props.getBook(this.state.bookId);
        }
    }

    handleEditMode() {
        let book = this.props.books.items.find(item => item.id === this.state.bookId);
        let editMode = !this.state.editMode;

        this.setState({
            editMode: editMode,
            book: {
                ...book
            }
        });
    }

    handleSubmit(evt) {
        this.props.updateBook(this.state.book);
        evt.preventDefault();
    }

    handleRemove(evt) {
        this.props.removeBook(this.state.bookId);
        evt.preventDefault();
    }

    handleInputChange(evt) {
        this.setState({
            book: {
                ...this.state.book,
                [evt.target.id]: evt.target.value
            }
        });
    }

    render() {
        let book = this.props.books.items.find(item => item.id === this.state.bookId);
        let aboutBook;
        
        if (book) {
            aboutBook = this.state.editMode ? ( 
                    <BookEditor 
                        book={this.state.book} 
                        submitText='Update Book' 
                        onChange={this.handleInputChange} 
                        onSubmit={this.handleSubmit} 
                    />
                ) : (
                    <BookCard book={book} isFull={true} /> 
                );
        }

        let toolBarBtns = this.state.editMode ? (
                    <div className='tool-bar-btns'>
                        <button onClick={this.handleEditMode}>Cancel</button>
                    </div>
                ) : (
                    <div className='tool-bar-btns'>
                        <button onClick={this.handleEditMode}>Edit</button>
                        <button onClick={this.handleRemove}>Remove</button>
                    </div>
                );

        return (
            <div className='about-book-page'>
                <h2>About book</h2>
                <div className='tool-bar'>
                    {toolBarBtns}
                </div>
                {this.props.books.isFetching ? <Loader /> : aboutBook}
                <Link to='/books' className='back-button'>Back</Link>
            </div>
        );
    }
}

BooksDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            bookid: PropTypes.string.isRequired
        })
    }),
    getBook: PropTypes.func.isRequired,
    updateBook: PropTypes.func.isRequired,
    removeBook: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
}

export default BooksDetails;