import React from 'react'

import './Grid.scss'

const Grid = ({images}) => {
    return (
        <>
            <div className="grid">
            {
                images.map((image, idx) => {
                    return (
                        <div key={idx}>
                            <div className="grid-cell" style={{backgroundImage: `url(${image.url})`}}>
                            <div className="grid-read-more">
                            <button className="grid-cell-btn btn btn-danger">
                                Read More
                            </button>
                            </div>
                        {/* <div></div> */}
                    </div>
                </div>
           
                    )
                })
            }
              </div>   
        </>
    )
}

export default Grid
