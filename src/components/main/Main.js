import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './Main.scss'

import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner'
import {loadMoreMovies, setResponsePageNumber} from '../../redux/actions/movies'

const Main = ({loadMoreMovies, page, totalPages, setResponsePageNumber}) => {

    const [loading, setLoading] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(page)
    const mainRef = React.useRef();
    const bottomLineRef = React.useRef();

    React.useEffect(() => {
        setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 3000);
    }, [])

    React.useEffect(() => {
        setResponsePageNumber(currentPage, totalPages)
        loadMoreMovies('now_playing', currentPage)
        console.log('CURRENT PAGE', currentPage)
    }, [currentPage])

    // const fetchData = () => {
    //     if (page < totalPages) {
    //         setCurrentPage((prev) => prev + 1)
    //     }
    // }

const fetchData = () => {
    // let pageNumber = currentPage;
    // console.log('PAGE', page)
    if (page < totalPages) {
    //   pageNumber += 1;
      setCurrentPage((prev) => prev + 1);
    //   loadMoreMovies(movieType, pageNumber);
    }
  };

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineOffsetTop } = bottomLineRef.current.getBoundingClientRect();

    if (bottomLineOffsetTop <= containerHeight) {
      fetchData();
    }
  };

    // const handleScroll = () => {
    //     console.log('AM I FIRING???')
    //     const containerHeight = mainRef.current.getBoundingClientRect().height;
    //     const {top: bottomLineTop} = bottomLineRef.current.getBoundingClientRect()

    //     if(bottomLineTop <= containerHeight) {
    //         fetchData();
    //     }
    // }

    return (
        <>
            <div className="main" ref={mainRef} onScroll={() => handleScroll()}>
                {
                    loading ? <Spinner/> :  <MainContent />
                }
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
    setResponsePageNumber: PropTypes.func
}

const mapStateToProps = (state) => ({
    list: state.movies.list,
    page: state.movies.page,
    totalPages: state.movies.totalPages
})

export default connect(mapStateToProps, 
    {loadMoreMovies, setResponsePageNumber}
)(Main);
