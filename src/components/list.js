import { Link } from 'gatsby'
import React from 'react'
import "./list.css";

export default class list extends React.Component {
  render() {
    return (
      <ul class="arcitechList">
        {this.props.items.map(post => (
        <Link 
					key={post.node.id} 
					to={post.node.frontmatter.path}>
						<li>
							{post.node.frontmatter.name}
						</li>
        </Link>
    ))}
      </ul>
    );
  }
}

