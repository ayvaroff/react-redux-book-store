import Http from 'Utils/http';

const API_ROOT = 'http://localhost:3000'

export const getAllBooks = () => {
    let baseUrl = API_ROOT + '/books';
    let params = {
        url: baseUrl
    };
    return Http.get(params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const getBook = (bookId) => {
    let baseUrl = API_ROOT + '/books/' + bookId;
    let params = {
        url: baseUrl
    };
    return Http.get(params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const addBook = (book) => {
    let baseUrl = API_ROOT + '/books';
    let params = {
        url: baseUrl,
        data: book
    };
    return Http.post(params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const updateBook = (book) => {
    let baseUrl = API_ROOT + '/books/' + book.id;
    let params = {
        url: baseUrl,
        data: book
    };
    return Http.put(params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const removeBook = (bookId) => {
    let baseUrl = API_ROOT + '/books/' + bookId;
    let params = {
        url: baseUrl
    };
    return Http.remove(params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const getAllBookStores = () => {
    let baseUrl = API_ROOT + '/bookstores';
    let params = {
        url: baseUrl
    };
    return Http.get(params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}