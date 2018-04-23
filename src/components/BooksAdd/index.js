import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import BookEditor from '../BookEditor';

class BooksAdd extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            isbn: '',
            about: ''
        }
    }

    handleSubmit(evt) {
        this.props.addBook(this.state);
        evt.preventDefault();
    }

    handleInputChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Add book</h2>
                <BookEditor 
                    book={this.state} 
                    submitText='Add Book' 
                    onChange={this.handleInputChange} 
                    onSubmit={this.handleSubmit} 
                />
                {this.props.books.isFetching && <Loader />}
                <Link to='/books' className='back-button'>Back</Link>
            </div>
        );
    }
}

BooksAdd.propTypes = {
    addBook: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
}

export default BooksAdd;