
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


// import "./AuthorOfTheDay.css";

const AuthorOfTheDay = ({data})=>{
	console.log(data);
	if(data){
		return(
			<div>
				<h1>{data.javascriptFrontmatter.frontmatter.name}</h1>
			</div>
		)
	}
	return <div></div>
}
export default AuthorOfTheDay
