import React from 'react'
import { Link } from 'gatsby'
import List from '../components/list'
import Layout from '../components/layout'
import Image from '../components/image'

class IndexPage extends React.Component
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
        <h1>Белорусские архитекторы</h1>
        <from>
          <input onChange={this.handleChange}>
          </input>
        </from>
        <List items={this.state.items} />
      </Layout>
    )
    }

    handleChange(e) {
      console.log(this.data);
      this.setState({
        items: this.data.allJavascriptFrontmatter.edges.filter((item)=>{
          if (!e.target.value) return true;
          return item.node.frontmatter.name.includes(e.target.value)
        })
      })
    }
  }

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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