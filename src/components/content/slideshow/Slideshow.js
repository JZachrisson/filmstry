import React from 'react';
import PropTypes from 'prop-types';
import './Slideshow.scss';

const Slideshow = ({ images, auto, showArrows }) => {
    const [state, setState] = React.useState({
        slideshow: images[0],
        slideIndex: 0
    });

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const { slideshow, slideIndex } = state;
    let currentSlideIndex = 0;

    React.useEffect(() => {
        setState({
            ...state,
            slideIndex: 0,
            slideshow: images[0]
        });
        if (auto) {
            const timeInterval = setInterval(() => {
                autoMoveSlide();
            }, 5000);

            return () => {
                clearInterval(timeInterval);
            };
        }
    }, [images]);

    const autoMoveSlide = () => {
        let lastIndex = 0;
        lastIndex = currentSlideIndex + 1;
        currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
        setState((prev) => ({
            ...prev,
            slideshow: images[currentSlideIndex],
            slideIndex: currentSlideIndex
        }));
    };

    const moveSlideWithArrows = (type) => {
        let index = currentIndex;

        if (type === 'prev') {
            if (currentIndex <= 0) {
                index = images.length - 1;
            } else {
                index -= 1;
            }
        }

        if (type === 'next') {
            if (currentIndex >= images.length - 1) {
                index = 0;
            } else {
                index += 1;
            }
        }
        setCurrentIndex(index);
        setState((prev) => ({
            ...prev,
            slideshow: images[index],
            slideIndex: index
        }));
    };

    const RenderArrows = () => {
        return (
            <div className="slider-arrows">
                <div className="slider-arrow slider-arrow--left" onClick={() => moveSlideWithArrows('prev')} />
                <div className="slider-arrow slider-arrow--right" onClick={() => moveSlideWithArrows('next')} />
            </div>
        );
    };

    const Indicators = (props) => {
        const { currentSlide } = props;
        const listIndicators = images.map((slide, idx) => {
            const btnClasses = idx === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
            return <button className={btnClasses} key={idx} />;
        });
        return <div className="slider-nav">{listIndicators}</div>;
    };

    return (
        <>
            <div className="slider">
                <div className="slider-slides">{images && images.length > 0 && slideshow && <div className="slider-image" style={{ backgroundImage: `url(${slideshow.url})` }}></div>}</div>

                <Indicators currentSlide={slideIndex} />
                {showArrows ? <RenderArrows /> : null}
            </div>
        </>
    );
};

Slideshow.propTypes = {
    images: PropTypes.array.isRequired,
    auto: PropTypes.bool.isRequired,
    showArrows: PropTypes.bool.isRequired,
    currentSlide: PropTypes.number
};

export default Slideshow;
