import React from 'react';
import {connect} from 'react-redux'
import {getMovies} from '../../redux/actions/movies'
import PropTypes from 'prop-types'

import { API_URL } from '../../services/movies.service';

import './Header.scss';
import logo from '../../logo.svg';

const HEADER_LIST = [
    {
        id: 1,
        iconClass: 'fas fa-film',
        name: 'Now Playing',
        type: 'now_playing'
    },
    {
        id: 2,
        iconClass: 'fas fa-fire',
        name: 'Popular',
        type: 'popular'
    },
    {
        id: 3,
        iconClass: 'fas fa-star',
        name: 'Top Rated',
        type: 'top_rated'
    },
    {
        id: 4,
        iconClass: 'fas fa-plus-square',
        name: 'Upcoming',
        type: 'upcoming'
    }
];

const Header = ({getMovies}) => {
   
    const [navClass, setNavClass] = React.useState(false);
    const [menuClass, setMenuClass] = React.useState(false);

    const toggleMenu = () => {
        setMenuClass((prevMenu) => !prevMenu);
        setNavClass((prevClass) => !prevClass);
    };

    React.useEffect(() => {
        getMovies('now_playing', 1)

        // es-linst-disable-next-line
    }, []);

    React.useEffect(() => {
        if (navClass) {
            document.body.classList.add('header-nav-open');
        } else {
            document.body.classList.remove('header-nav-open');
        }
    }, [navClass]);

    return (
        <>
            <div className="header-nav-wrapper">
                <div className="header-bar"></div>
                <div className="header-navbar">
                    <div className="header-image">
                        <img src={logo} alt="" />
                    </div>
                    <span className="header-title">FILMSTRY</span>
                    <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
                        {HEADER_LIST.map((data) => {
                            return (
                                <li key={data.id} className="header-nav-item">
                                    <span className="header-list-name">
                                        <i className={data.iconClass}></i>
                                    </span>
                                    &nbsp;
                                    <span className="header-list-name">{data.name}</span>
                                </li>
                            );
                        })}
                        <input className="search-input" type="text" placeholder="Search Movie" />
                    </ul>
                </div>
                <div className="header-bar"></div>
            </div>
        </>
    );
};

Header.propTypes = {
    getMovies: PropTypes.func
}

const mapStateToProps = (state) => ({
    list: state.movies.list
})

export default connect(
    mapStateToProps,
    {getMovies}
)(Header);
