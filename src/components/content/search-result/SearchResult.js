import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../../services/movies.service';
import { v4 as uuidv4 } from 'uuid';

import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';

import '../grid/Grid.scss';
import './SearchResult.scss';

const SearchResult = ({ searchResult, searchQuery }) => {
    const [movieData, setMovieData] = React.useState([]);

    React.useEffect(() => {
        setMovieData(searchResult);
    }, [searchResult]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <div className="search-keyword">
            <div className="grid-search-title">
                <span className="grid-text1">Your search keyword:</span>
                <span className="grid-text2">{searchQuery}</span>
            </div>
            <div className="grid">
                {movieData.map((movie) => {
                    return (
                        <React.Fragment key={uuidv4()}>
                            {movie.backdrop_path && (
                                <LazyImage className="grid-cell" src={`${IMAGE_URL}/${movie.backdrop_path}`} alt="placeholder">
                                    <div className="grid-read-more">
                                        <div className="grid-overview-wrapper">
                                            <div>
                                                <p className="grid-overview">{truncate(movie?.overview, 150)}</p>
                                            </div>
                                            <button className="grid-cell-btn btn btn-danger">Read More</button>
                                        </div>
                                    </div>
                                    <div className="grid-detail">
                                        <span className="grid-detail-title">{movie.title}</span>
                                        <div className="grid-detail-rating">
                                            <Rating rating={movie.vote_average} totalStars={10} />
                                            &nbsp;&nbsp;
                                            <div className="grid-vote-average">{movie.vote_average}</div>
                                        </div>
                                    </div>
                                </LazyImage>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

SearchResult.propTypes = {
    searchResult: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    searchResult: state.movies.searchResult,
    searchQuery: state.movies.searchQuery
});

export default connect(mapStateToProps, {})(SearchResult);
