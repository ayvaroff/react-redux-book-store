export const ALL_BOOKS_REQUEST = 'ALL_BOOKS_REQUEST';
export const ALL_BOOKS_SUCCESS = 'ALL_BOOKS_SUCCESS';
export const ALL_BOOKS_FAILURE = 'ALL_BOOKS_FAILURE';

export const getAllBooks = () => ({
    type: ALL_BOOKS_REQUEST
});

export const BOOK_REQUEST = 'BOOK_REQUEST';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_FAILURE = 'BOOK_FAILURE';

export const getBook = (bookId) => ({
    type: BOOK_REQUEST,
    bookId: bookId
});

export const BOOK_ADD_REQUEST = 'BOOK_ADD_REQUEST';
export const BOOK_ADD_SUCCESS = 'BOOK_ADD_SUCCESS';
export const BOOK_ADD_FAILURE = 'BOOK_ADD_FAILURE';

export const addBook = (book) => ({
    type: BOOK_ADD_REQUEST,
    book: book
});

export const BOOK_UPDATE_REQUEST = 'BOOK_UPDATE_REQUEST';
export const BOOK_UPDATE_SUCCESS = 'BOOK_UPDATE_SUCCESS';
export const BOOK_UPDATE_FAILURE = 'BOOK_UPDATE_FAILURE';

export const updateBook = (book) => ({
    type: BOOK_UPDATE_REQUEST,
    book: book
});

export const BOOK_REMOVE_REQUEST = 'BOOK_REMOVE_REQUEST';
export const BOOK_REMOVE_SUCCESS = 'BOOK_REMOVE_SUCCESS';
export const BOOK_REMOVE_FAILURE = 'BOOK_REMOVE_FAILURE';

export const removeBook = (bookId) => ({
    type: BOOK_REMOVE_REQUEST,
    bookId: bookId
});