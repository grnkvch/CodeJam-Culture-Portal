import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import TimeLineComponent from './AuthorComponents/TimeLineComponent/TimeLineComponent';
import YoutubeComponent from './AuthorComponents/YoutubeComponent/YoutubeComponent';
import MapComponent from './AuthorComponents/MapComponent/MapComponent';
import Layout from './layout';
import PageNavigation from './AuthorComponents/pageNavigation/pageNavigation';
import Header from './header';
import TableComponent from './AuthorComponents/TableComponent/TableComponent';
import GalleryComponent from './AuthorComponents/GalleryComponent/GalleryComponent';
import './AuthorComponents/author.css';
const arcPage = ({data}) => {
  const arc = data.javascriptFrontmatter.frontmatter;
  const image = require(`../images/${arc.img}`);
  return (
    <Fragment>
      <Header />
      <PageNavigation />
      <div className="image-title" style={{marginTop: '120px'}}><img src={image} alt="Author's picture" /></div>
      <div style={{ textAlign: 'center', fontSize: '30px' }}>{arc.name}</div>
      <div style={{ textAlign: 'center', fontSize: '20px' }}>{arc.vita}</div>
      <div id="timeline" className="title" style={{ textAlign: 'center'}}><h1>Timeline</h1></div>
      <TimeLineComponent  timelineData={arc.timelineData} />
      <div id="masterpiece" className="title" style={{ textAlign: 'center'}}><h1>Masterpiece</h1></div>
      <TableComponent work={arc.work} />
      <div id="youtube" className="title" style={{ textAlign: 'center'}}><h1>Youtube</h1></div>
      <YoutubeComponent videoId={arc.videoId} />
      <div id="map" className="title" style={{ textAlign: 'center'}}><h1>Map</h1></div>
      <MapComponent work={arc.work}/>
      <div id="gallery" className="title" style={{ textAlign: 'center'}}><h1>Gallery</h1></div>
      <GalleryComponent work={arc.work}/>
    </Fragment>);
  
}

export default arcPage;

export const postQuery = graphql`
  query arcPageByPath($path: String!) {
    javascriptFrontmatter(frontmatter: { path: { eq: $path} }) {
      frontmatter {
        path
        name
        vita
        img
        videoId
        timelineData {
          date
          text
        }
        work{
          title
          width
          length
          date
          img
        }
      }
    }
  }
`