import React from 'react';
import './pageNavigationStyle.css';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

class pageNavigation extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
        <div className="pageNavigationWrapper">
            <div className="pageNavigation">
                <Link to="#timeline"><FontAwesomeIcon icon = {faHome} /></Link>
                <a className="active" href="#timeline"><FontAwesomeIcon icon = {faCalendarAlt} /></a>
                <a className="active" href="#youtube"><FontAwesomeIcon icon = {faYoutube} /></a>
                <a className="active" href="#map"><FontAwesomeIcon icon = {faMapMarked} /> </a>
                <a className="active" href="#masterpiece"><FontAwesomeIcon icon = {faTable} /></a>
                <a className="active" href="#gallery"><FontAwesomeIcon icon = {faImages} /></a>
            </div>
            <div className="toTopWrapper">
                <a className="active" id="topButton" href="#toTop"><FontAwesomeIcon icon = {faAngleDoubleUp} /></a>
            </div>
        </div>);
    }
}
export default pageNavigation;