import React from 'react'

import './Grid.scss'

const Grid = () => {
    return (
        <>
            <div className="grid">
                <div>
                    <div className="grid-cell">
                        <div className="grid-read-more">
                            <button className="grid-cell-btn">
                                Read More
                            </button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid
