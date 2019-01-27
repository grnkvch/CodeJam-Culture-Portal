import React from 'react'
import { Link } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import List from '../components/list'
import Layout from '../components/layout'
import "./index.css";

class SearchPage extends React.Component
  {
    constructor({data, t}) {
      super({data, t});
      this.t = t;
      this.data = data;
      this.state = { items: this.data.allJavascriptFrontmatter.edges, text:''};
      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
      return (<Layout>
        <h2>Белорусские архитекторы</h2>
        <label>Поиск  <input onChange={this.handleChange}>
          </input></label>
        <List items={this.state.items} t={this.t}/>
      </Layout>
    )
    }

    handleChange(e) {
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