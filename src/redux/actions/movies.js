import { API_URL } from '../../services/movies.service';
import { MOVIE_LIST, SET_ERROR, RESPONSE_PAGE, LOAD_MORE_RESULTS} from '../types';

export const getMovies = (type, pageNumber) => async (dispatch) => {
    try {
        const response = await getMoviesRequest(type, pageNumber)
        const {results, payload} = response
        dispatchMethod(MOVIE_LIST, results, dispatch);
        dispatchMethod(RESPONSE_PAGE, payload, dispatch);
    } catch (error) {
        if (error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch)
        }
    }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
    console.log('LOAD MORE MOVIES FIRED!')
    try {
        const response = await getMoviesRequest(type, pageNumber)
        const {results, payload} = response
        console.log('RESULTS', results)
        dispatchMethod(LOAD_MORE_RESULTS, results, dispatch);
        dispatchMethod(RESPONSE_PAGE, payload, dispatch);
    } catch (error) {
        if (error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch)
        }
    }
};

export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
    const payload = {page, totalPages};
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
}

const dispatchMethod = (type, payload, dispatch) => {
    dispatch({
        type,
        payload
    });
};

const getMoviesRequest = async (type, pageNumber) => {
        const movies = await API_URL(type, pageNumber);
        const { results, page, total_pages } = movies.data;
        const payload = {
            page,
            totalPages: total_pages
        }
    return {results, payload}
}
