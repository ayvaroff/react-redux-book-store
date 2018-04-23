import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import BookCard from '../BookCard';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllBooks();
    }

    render() {
        const booksList = this.props.books.items.map(book => (
            <BookCard key={book.id} book={book} isFull={false} />
        ));

        return (
            <div>
                <div className='tool-bar'>
                    <Link to={'/books/add'}>Add Book</Link>
                </div>
                {this.props.books.isFetching ? <Loader /> : booksList}
            </div>
        );
    }
}

BooksList.propTypes = {
    getAllBooks: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
}

export default BooksList;