
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


// import "./AuthorOfTheDay.css";

const AuthorOfTheDay = ({data})=>{
	const src = data.javascriptFrontmatter.frontmatter;
	if(data){
		return(
			<div style={{margin: `20px`}}>
				<h3>Автор дня</h3>
				<Link to={src.path}><h4>{src.name} ({src.date})</h4></Link>
				<img src={require(`../images/${src.img}`)} alt="Author's picture" />
			</div>
		)
	}
	return <div></div>
}
export default AuthorOfTheDay
