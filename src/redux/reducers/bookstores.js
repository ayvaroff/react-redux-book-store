import * as ActionTypes from '../actions';

const initialState = {
    isFetching: false,
    items: []
}

const bookstores = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.BOOKSTORE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case ActionTypes.BOOKSTORE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload
            }
        case ActionTypes.BOOKSTORE_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default bookstores;