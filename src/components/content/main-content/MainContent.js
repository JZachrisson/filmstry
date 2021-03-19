import React from 'react';
import './MainContent.scss';

import Slideshow from '../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid'

const MainContent = () => {
    const images = [
        {
            url: 'https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655__480.jpg'
        },
        {
            url: 'https://media.istockphoto.com/photos/drive-in-movie-picture-id1252963897?b=1&k=6&m=1252963897&s=170667a&w=0&h=v1Marzud9z8zsvxOxR0wTT_KhB1EHI4vn_KSplq1SKo='
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__480.jpg'
        },
            {
            url: 'https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655__480.jpg'
        },
        {
            url: 'https://media.istockphoto.com/photos/drive-in-movie-picture-id1252963897?b=1&k=6&m=1252963897&s=170667a&w=0&h=v1Marzud9z8zsvxOxR0wTT_KhB1EHI4vn_KSplq1SKo='
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__480.jpg'
        }
    ];

    const [currentPage, setCurrentPage] = React.useState(1);

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
            <Grid images={images}/>
        </div>
    );
};

export default MainContent;
