import React from 'react';
import PropTypes from 'prop-types';

import './Paginate.scss';

const Paginate = ({ currentPage, totalPages, paginate }) => {
    const [page, setPage] = React.useState();
    const [totalPageNumber, setTotalPageNumber] = React.useState();

    React.useEffect(() => {
        setPage(currentPage);
        setTotalPageNumber(totalPages);
    }, [currentPage, totalPages]);

    return (
        <>
            <span className="page-count">
                {page} - {totalPageNumber}
            </span>
            <button className={page === 1 ? 'paginate-btn paginate-btn btn btn-danger disable' : 'paginate-btn paginate-btn btn btn-danger'} onClick={() => paginate('prev')}>
                Prev
            </button>
            <button className={page === totalPages ? 'paginate-btn btn btn-danger disable' : 'paginate-btn btn btn-danger'} onClick={() => paginate('next')}>
                Next
            </button>
        </>
    );
};

Paginate.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
};

export default Paginate;
