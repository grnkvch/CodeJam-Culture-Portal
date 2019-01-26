import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Белорусские архитекторы</h1>
    <ul>
      {data.allJavascriptFrontmatter.edges.map(post => (
      <li>
        <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.name}
      </Link>
      </li>
    ))}
    </ul>
  </Layout>
)

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