import React from 'react';
import './headerStyle.css';
import { Link } from 'gatsby';
class HeaderComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
        <div className="header">
            <Link
          to="/"
          style={{
            backgroundColor: 'dodgerblue',  
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Main page
        </Link>
            <div className="header-right">
                <a className="active" href="#timeline">Timeline</a>
                <a className="active" href="#youtube">Youtube</a>
                <a className="active" href="#map">Map</a>
                <a className="active" href="#masterpiece">Masterpieces</a>
                <a className="active" href="#gallery">Gallery</a>
            </div>
        </div>);
    }
}
export default HeaderComponent;