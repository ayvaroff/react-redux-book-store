import * as ActionTypes from '../actions';

const initialState = {
    isFetching: false,
    items: []
}

const books = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.ALL_BOOKS_REQUEST:
        case ActionTypes.BOOK_REQUEST:
        case ActionTypes.BOOK_ADD_REQUEST:
        case ActionTypes.BOOK_UPDATE_REQUEST:
        case ActionTypes.BOOK_REMOVE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case ActionTypes.ALL_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload
            }
        case ActionTypes.ALL_BOOKS_FAILURE:
        case ActionTypes.BOOK_FAILURE:
        case ActionTypes.BOOK_ADD_FAILURE:
        case ActionTypes.BOOK_UPDATE_FAILURE:
        case ActionTypes.BOOK_REMOVE_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        case ActionTypes.BOOK_SUCCESS:
        case ActionTypes.BOOK_ADD_SUCCESS:
        case ActionTypes.BOOK_UPDATE_SUCCESS: {
            let items = state.items.slice();
            
            items = items.filter(item => item.id != action.payload.id);
            items.push(action.payload);

            return {
                ...state,
                isFetching: false,
                items: items
            };
        }
        case ActionTypes.BOOK_REMOVE_SUCCESS: {
            let items = state.items.slice();
            
            items = items.filter(item => item.id != action.payload.id);

            return {
                ...state,
                isFetching: false,
                items: items
            };
        }
        default:
            return state;
    }
}

export default books;