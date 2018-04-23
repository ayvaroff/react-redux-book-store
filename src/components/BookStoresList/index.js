import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from '../Loader';

class BookStoresList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllBookStores();
    }

    render() {
        const bookStoresList = this.props.bookstores.items.map(bookstore => (
            <div key={bookstore.id}>
                {bookstore.name}
                <br />
                <Link to={`/bookstores/${bookstore.id}`}>Подробнее</Link>
            </div>
        ));

        return (
            <div>
                <Link to={'/bookstores/add'}>Добавить</Link>
                {this.props.bookstores.isFetching ? <Loader /> : bookStoresList}
            </div>
        );
    }
}

BookStoresList.propTypes = {
    getAllBookStores: PropTypes.func.isRequired,
    bookstores: PropTypes.object.isRequired
}

export default BookStoresList;