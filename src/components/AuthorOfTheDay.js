
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './AuthorOfTheDay.css';

const AuthorOfTheDay = ({data})=>{
	const src = data.javascriptFrontmatter.frontmatter;
	if(data){

		return(
			<div className="authorOfTheDay" style={{margin: `20px`}}>
				<h3 className="authorOfTheDay_title">Автор дня</h3>
				<h4 className="authorOfTheDay_name">{src.name}</h4>
				<h5 className="authorOfTheDay_date">{src.date}</h5>
				<p className="authorOfTheDay_vita">{src.vita}</p>
				<img className="authorOfTheDay_img" src={require(`../images/${src.img}`)} alt="Author's picture" />
				<Link to={src.path}><button className="authorOfTheDay_but">Перейти</button></Link>
			</div>
		)
	}
	return <div></div>
}
export default AuthorOfTheDay
