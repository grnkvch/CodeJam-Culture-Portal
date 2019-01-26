import { Link } from 'gatsby'
import React from 'react'

export default class list extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(post => (
      <li>
        <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.name}
      </Link>
      </li>
    ))}
      </ul>
    );
  }
}

