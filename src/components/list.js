import { Link } from 'gatsby-plugin-i18next';
import React from 'react'
import "./list.css";

export default class list extends React.Component {
  render() {
    console.error(this.props);
    if (this.props.items.length) {
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
    } else {
      return (<li>There's no results, try another laguage section</li>)
    }
  }
}

