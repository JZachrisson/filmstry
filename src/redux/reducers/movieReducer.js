import {MOVIE_LIST, RESPONSE_PAGE, LOAD_MORE_RESULTS} from '../types'

const initialState = {
    list: [],
    page: 1,
    totalPages: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_LIST:
            return {
                ...state,
                list: action.payload
            };
        case RESPONSE_PAGE:
            return {
                ...state,
                page: action.payload.page,
                totalPages: action.payload.totalPages
            };
        case LOAD_MORE_RESULTS:
            return {
                ...state,
                list: [...state.list, ...action.payload]
            }
        default:
            return state;
    }
};
