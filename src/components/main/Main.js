import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Main.scss';

import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';

const Main = ({ loadMoreMovies, page, totalPages, setResponsePageNumber, movieType }) => {
    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(page);
    const mainRef = React.useRef();
    const bottomLineRef = React.useRef();

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    React.useEffect(() => {
        setResponsePageNumber(currentPage, totalPages);
    }, [currentPage, totalPages]);

    const fetchData = () => {
        let pageNumber = currentPage;
        if (page < totalPages) {
            pageNumber += 1;
            setCurrentPage(pageNumber);
            loadMoreMovies(movieType, pageNumber);
        } else {
            // loadMoreMovies('now_playing', currentPage)
        }
    };

    const handleScroll = () => {
        const containerHeight = mainRef.current.getBoundingClientRect().height;
        const { top: bottomLineOffsetTop } = bottomLineRef.current.getBoundingClientRect();

        if (bottomLineOffsetTop <= containerHeight) {
            fetchData();
        }
    };

    return (
        <>
            <div className="main" ref={mainRef} onScroll={() => handleScroll()}>
                {loading ? <Spinner /> : <MainContent />}
                <div ref={bottomLineRef}></div>
            </div>
        </>
    );
};

Main.propTypes = {
    list: PropTypes.array,
    loadMoreMovies: PropTypes.func,
    page: PropTypes.number,
    totalPages: PropTypes.number,
    setResponsePageNumber: PropTypes.func,
    movieType: PropTypes.string
};

const mapStateToProps = (state) => ({
    list: state.movies.list,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    movieType: state.movies.movieType
});

export default connect(mapStateToProps, { loadMoreMovies, setResponsePageNumber })(Main);
