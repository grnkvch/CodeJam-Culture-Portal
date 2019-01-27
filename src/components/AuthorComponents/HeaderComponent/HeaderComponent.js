import React from 'react';
import './headerStyle.css';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

class HeaderComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
        <div className="header">
            <div className="header-right">
                <a className="active" href="/"><FontAwesomeIcon icon = {faHome} /></a>
                <a className="active" href="#timeline"><FontAwesomeIcon icon = {faCalendarAlt} /></a>
                <a className="active" href="#youtube"><FontAwesomeIcon icon = {faYoutube} /></a>
                <a className="active" href="#map"><FontAwesomeIcon icon = {faMapMarked} /> </a>
                <a className="active" href="#masterpiece"><FontAwesomeIcon icon = {faTable} /></a>
                <a className="active" href="#gallery"><FontAwesomeIcon icon = {faImages} /></a>
            </div>
        </div>);
    }
}
export default HeaderComponent;