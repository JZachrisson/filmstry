import React from 'react'
import PropTypes from 'prop-types'
import placeholder from '../../assets/lazy_loading.gif'



const LazyImage = ({src, alt, children, className}) => {
    const [imageSrc, setImageSrc] = React.useState(placeholder)
    const [imageRef, setImageRef] = React.useState()
    return (
        <>
            <div className={className} ref={setImageRef} style={{backgroundImage: `url(${imageSrc})`}} alt={alt}>
                {children}
            </div>
        </>
    )
}

export default LazyImage
