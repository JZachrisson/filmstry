import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './MainContent.scss';

import Slideshow from '../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import {IMAGE_URL} from '../../../services/movies.service'

const MainContent = ({list}) => {
    const imagesArray = [
        {
            url: 'https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655__480.jpg',
            rating: 7.5
        },
        {
            url: 'https://media.istockphoto.com/photos/drive-in-movie-picture-id1252963897?b=1&k=6&m=1252963897&s=170667a&w=0&h=v1Marzud9z8zsvxOxR0wTT_KhB1EHI4vn_KSplq1SKo=',
            rating: 8.5
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__480.jpg',
            rating: 7.8
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655__480.jpg',
            rating: 9.7
        },
        {
            url: 'https://media.istockphoto.com/photos/drive-in-movie-picture-id1252963897?b=1&k=6&m=1252963897&s=170667a&w=0&h=v1Marzud9z8zsvxOxR0wTT_KhB1EHI4vn_KSplq1SKo=',
            rating: 6.5
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__480.jpg',
            rating: 5.5
        }
    ];

    const [currentPage, setCurrentPage] = React.useState(1);
    const [images, setImages] = React.useState([])

    const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4)
    
    React.useEffect(() => {
        if(randomMovies.length) {
            const IMAGES = [
                {
                    id: 1,
                    url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
                },
                 {
                    id: 2,
                    url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
                },
                 {
                    id: 3,
                    url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
                },
                 {
                    id: 4,
                    url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
                }
            ]
            setImages(IMAGES)
        }
    }, [])

    const paginate = (type) => {
        if (type === 'prev' && currentPage >= 1) {
            setCurrentPage((prev) => prev - 1);
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <div className="main-content">
            <Slideshow images={images} auto={true} showArrows={false} />
            <div className="movie-grid-container">
                <div className="movie-type">Now Playing</div>
                <div className="paginate">
                    <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
                </div>
            </div>
            <Grid/>
        </div>
    );
};

MainContent.propTypes = {
    list: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    list: state.movies.list
})

export default connect(
    mapStateToProps,
    {}
)(MainContent);
