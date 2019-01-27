import React from 'react'
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import List from '../components/list'
import Layout from '../components/layout'
import "./index.css";
import "./search.css";

class SearchPage extends React.Component
  {
    constructor({data, t}) {
      super({data, t});
      this.t = t;
      this.data = data;
      this.state = { text:''};
      if (this.data.allJavascriptFrontmatter) this.state.items = this.data.allJavascriptFrontmatter.edges
      else this.state.items = [];
      this.handleChange = this.handleChange.bind(this);
    }
    render(){
      return (<Layout>
        <h2>{this.t(`srchTitle`)}</h2>
        <input type="search" placeholder={this.t(`srchPlaceholder`)} onChange={this.handleChange}></input>
        <List items={this.state.items} />
      </Layout>
    )
    }

    handleChange(e) {
      if (!this.data.allJavascriptFrontmatter) return;
      this.setState({
        items: this.data.allJavascriptFrontmatter.edges.filter((item)=>{
          if (!e.target.value) return true;
          return item.node.frontmatter.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
      })
    }
  }

export default withI18next()(withNamespaces()(SearchPage));

export const pageQuery = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }

    allJavascriptFrontmatter(filter: {frontmatter:{lng:{eq: $lng}}}) {
      edges {
        node {
        id
          frontmatter {
            lng
            path
            name
          }
        }
      }
  }
  }
`