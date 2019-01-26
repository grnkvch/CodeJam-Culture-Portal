
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import "./Team.css";

class Team extends React.Component {
	render(){
		// console.log()
		return (
	 		<div>
	 			<h3 
	 				style={{textAlign:'center', margin:"40px 0 20px 0"}}>
	 				Сайт делали
	 			</h3>
	 			{this.props.data.map((item, index) => 
	 				<div className="teamContainer">
		 				<img src={item.src}></img>
			 			<p>Имя и фамилия: {item.name}</p>	 				
			 			<p>Никнейм: {item.nickname}</p>	 				
			 			Ссылка на профиль: <a target="_blank" href={item.gitHub}>GitHub</a>	 				
	 				</div>
				)}
	 		</div>
		 )
	}
	 
}

export default Team
