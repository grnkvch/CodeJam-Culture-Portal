
import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import './AuthorOfTheDay.css';

const AuthorOfTheDay = ({data, t})=>{
	if(data.javascriptFrontmatter){
		const src = data.javascriptFrontmatter.frontmatter;
		return(
			<div className="authorOfTheDay" style={{margin: `20px`}}>
				<h3 className="authorOfTheDay_title">{t(`aodTitle`)}</h3>
				<h4 className="authorOfTheDay_name">{src.name}</h4>
				<h5 className="authorOfTheDay_date">{src.date}</h5>
				<p className="authorOfTheDay_vita">{src.vita}</p>
				<img className="authorOfTheDay_img" src={require(`../images/${src.img}`)} alt="Author's picture" />
				<Link to={src.path}><button className="authorOfTheDay_but">{t(`aodBtnCaptin`)}</button></Link>
			</div>
		)
	}
	return <div><h3 className="authorOfTheDay_title">{t(`aodTitle`)}</h3></div>
}
export default AuthorOfTheDay
