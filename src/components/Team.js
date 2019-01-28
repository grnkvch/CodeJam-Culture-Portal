
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import "./Team.css";

class Team extends React.Component {
	render(){
		return (
	 		<div className="teamContainer_wrapper">
	 			<h3 
	 				style={{textAlign:'center', margin:"40px 0 20px 0"}}>
	 				Сайт делала команда из пяти разработчиков
	 			</h3>
	 			{this.props.data.map((item, index) => 
	 				<div className="teamContainer" key={index}>
		 				<img src={item.src}></img>
			 			<p>{item.name}</p>	 				
			 			<p className="teamContainer_nickname">{item.nickname}</p>	
			 			<a 
			 				target="_blank" 
			 				href={item.gitHub} 
			 				style={{
			 						fontSize:'40px',
			 						color:'#3d3d3d'
			 				}}>
			 				<FontAwesomeIcon icon = {faGithub} /> 
			 			</a>	 				
	 				</div>
				)}
	 		</div>
		 )
	}
	 
}

export default Team
