import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const arcPage = ({data}) => {
  const arc = data.javascriptFrontmatter.frontmatter;
  return (
    <Layout>
    <h1>{arc.name}</h1>
    <h2>{arc.date}</h2>
    <p>{arc.vita}</p>
    <ul>
     {arc.timelineData.map(element => (<li><h3>{element.date}</h3>{element.text}</li>))} 
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>)
  
}

export default arcPage

export const postQuery = graphql`
  query arcPageByPath($path: String!) {
    javascriptFrontmatter(frontmatter: { path: { eq: $path} }) {
      frontmatter {
        path
        name
        vita
        timelineData{
          date
          text
      }
      }
    }
  }
`