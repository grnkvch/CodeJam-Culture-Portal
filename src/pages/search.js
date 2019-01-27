import React from 'react'
import List from '../components/list'
import Layout from '../components/layout'
import "./index.css";

class SearchPage extends React.Component
  {
    constructor({data}) {
      super({data});
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
        <List items={this.state.items} />
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

export default SearchPage

export const pageQuery = graphql`
  query SearchQuery {
    allJavascriptFrontmatter {
      edges {
        node {
        id
          frontmatter {
            path
            name
          }
        }
      }
    }
  }
`