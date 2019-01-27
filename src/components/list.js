import { Link } from 'gatsby-plugin-i18next';
import React from 'react'
import "./list.css"

export default class list extends React.Component {
  render() {
    console.error(this.props);
    if (!this.props.items) return (<li>{this.props.t(`srchNoResults`)}</li>)
    if (this.props.items.length) {
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
    } else {
      return (<li>{this.props.t(`srchAnotherLanguage`)}</li>)
    }
  }
}
