import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const BooksCard = (props) => {
    if (props.isFull) {
        return (
            <div className='book-card book-card-full'>
                <div className='book-wrapper'>
                    <div className='col book-img'>
                        <div className='book-img-cap' />
                    </div>
                    <div className='col book-info'>
                        <h3>{props.book.title}</h3>
                        <p className='book-author'>{props.book.author}</p>
                        <p className='book-isbn'>{props.book.isbn}</p>
                        <p className='book-about'>{props.book.about}</p>
                    </div>
                    <div className='clearfix'></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='col book-card'>
                <div className='book-wrapper'>
                    <div className='book-img'>
                        <div className='book-img-cap' />
                    </div>
                    <div className='book-info'>
                        <h3>{props.book.title}</h3>
                        <p className='book-author'>{props.book.author}</p>
                        <Link to={`/books/${props.book.id}`}>About</Link>
                    </div>
                </div>
            </div>
        );
    }    
}

BooksCard.propTypes = {
    isFull: PropTypes.bool.isRequired,
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired
    })
}

export default BooksCard;