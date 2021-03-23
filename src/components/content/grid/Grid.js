import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {IMAGE_URL} from '../../../services/movies.service'
import {v4 as uuidv4} from 'uuid'


import Rating from '../rating/Rating';

import './Grid.scss';

const Grid = ({ list }) => {

const [movieData, setMovieData] = React.useState([])

React.useEffect(() => {
    // console.log('LIST IN GRID', list)
    // const filteredList = list.filer((item) => )
    const filteredList = [...list.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];

    setMovieData(filteredList)
}, [list])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

    return (
        <>
            <div className="grid">
                {movieData.map((movie) => {
                    return (
                        <div key={uuidv4()}>
                            <div className="grid-cell" style={{ backgroundImage: `url(${IMAGE_URL}/${movie.backdrop_path})` }}>
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
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

Grid.propTypes = {
    list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    list: state.movies.list
})

export default connect(
    mapStateToProps,
    {}
)(Grid);


