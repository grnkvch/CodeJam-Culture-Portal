import React, { Fragment } from 'react'
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';


import TimeLineComponent from './AuthorComponents/TimeLineComponent/TimeLineComponent';
import YoutubeComponent from './AuthorComponents/YoutubeComponent/YoutubeComponent';
import MapComponent from './AuthorComponents/MapComponent/MapComponent';
import Layout from './layout';
import PageNavigation from './AuthorComponents/pageNavigation/pageNavigation';
import TableComponent from './AuthorComponents/TableComponent/TableComponent';
import GalleryComponent from './AuthorComponents/GalleryComponent/GalleryComponent';
import './AuthorComponents/author.css';


const arcPage = ({data, t}) => {
  
  if (!data.javascriptFrontmatter){
    return(<Layout>
      <div style={{ textAlign: 'center', fontSize: '30px' }}>This version of page hasn't created yet</div>
    </Layout>)
  } 
  const arc = data.javascriptFrontmatter.frontmatter;
  const image = require(`../images/${arc.img}`);
  return (   
  <Layout>
  <Fragment>
        <PageNavigation />
        <div className="image-title" style={{marginTop: '120px'}}><img src={image} alt="Author's picture" /></div>
        <div style={{ textAlign: 'center', fontSize: '30px' }}>{arc.name}</div>
        <div style={{ textAlign: 'center', fontSize: '20px' }}>{arc.vita}</div>
        <div id="timeline" className="title" style={{ textAlign: 'center'}}><h1>{t(`arcTimeline`)}</h1></div>
        <TimeLineComponent  timelineData={arc.timelineData} />
        <div id="masterpiece" className="title" style={{ textAlign: 'center'}}><h1>{t(`Masterpiece`)}</h1></div>
        <TableComponent work={arc.work} />
        <div id="youtube" className="title" style={{ textAlign: 'center'}}><h1>Youtube</h1></div>
        <YoutubeComponent videoId={arc.videoId} t={ t } />
        <div id="map" className="title" style={{ textAlign: 'center'}}><h1>{t(`arcMap`)}</h1></div>
        <MapComponent work={arc.work}/>
        <div id="gallery" className="title" style={{ textAlign: 'center'}}><h1>{t(`arcGallery`)}</h1></div>
        <GalleryComponent work={arc.work}/>
      </Fragment>
    </Layout>);
}

export default withI18next()(withNamespaces()(arcPage));

export const postQuery = graphql`
query($lng: String!, $originalPath: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }


    javascriptFrontmatter(frontmatter: { path: { eq: $originalPath}, lng: { eq: $lng }  }) {
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