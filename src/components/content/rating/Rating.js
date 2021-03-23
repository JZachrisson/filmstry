import React from 'react';
import PropTypes from 'prop-types';
import './Rating.scss';

const Rating = ({ rating, totalStars, className }) => {
    const [numberOfStars, setNumberOfStars] = React.useState([]);
    const ratingRef = React.useRef();

    React.useEffect(() => {
        const starsArray = [...Array(totalStars).keys()].map((i) => i + 1);
        setNumberOfStars(starsArray);
        let percentage;
        if (rating <= 5) {
            percentage = (rating / 5) * 100;
        } else {
            percentage = (rating / 10) * 100;
        }
        const starPercentage = `${Math.floor(percentage)}%`;
        ratingRef.current.style.width = starPercentage;
    }, [rating, totalStars]);
    return (
        <div className="star-rating">
            <div className={`back-stars ${className}`}>
                {numberOfStars.map((star) => (
                    <React.Fragment key={star}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </React.Fragment>
                ))}

                <div className={`front-stars ${className}`} ref={ratingRef}>
                    {numberOfStars.map((star) => (
                        <React.Fragment key={star}>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default Rating;
