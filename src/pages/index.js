import React, {Component} from 'react'
import { Link } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layout from '../components/layout'
import Team from '../components/Team';
import AuthorOfTheDay from '../components/AuthorOfTheDay';


import "./index.css";

const team = [
  { 
    name : "Ольга Лазаревич",
    nickname : "OlgaLazarevich",
    gitHub : "https://github.com/OlgaLazarevich",
    src : "https://avatars1.githubusercontent.com/u/29776065?s=400&u=3d49e6fc037f776565828ebf86f6d5f6aaeca297&v=4"
  },
  {
    name : "Валентин Гринкевич",
    nickname : "grnkvch",
    gitHub : "https://github.com/grnkvch",
    src : "https://avatars1.githubusercontent.com/u/43145804?s=460&v=4"
  },
  {
    name : "Евгений Пригодский",
    nickname : "dgekaa",
    gitHub : "https://github.com/dgekaa",
    src : "https://avatars3.githubusercontent.com/u/20840745?s=400&u=c7b401a4a46e72ca40bb7cdc1d59fb5f4f75e10a&v=4"
  },
  {
    name : "Антон Крутенок",
    nickname : "AntonySawyer",
    gitHub : "https://github.com/AntonySawyer",
    src : "https://www.w3schools.com/w3css/img_avatar3.png"
  },
  {
    name : "Артём Дачевский",
    nickname : "DevandScorp",
    gitHub : "https://github.com/DevandScorp",
    src : "https://www.w3schools.com/w3css/img_avatar3.png"
  },

];

const IndexPage = ({data, t}) =>{

return (
  <Layout>
    <h3 style={{textAlign:'center'}}>{t(`indDescrTitleP1`)} <br/> {t(`indDescrTitleP2`)}</h3>
    <div className="description">
      <p>{t(`indDescrFirst`)}</p>
      <div style={{marginTop :"12px"}}>
        <i>{t(`indDescrSecondP1`)}</i>
        <span>{t(`indDescrSecondP2`)} </span>
        <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D1%88%D0%BE%D0%B2,_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87" className="Balashov"> {t(`indDescrSecondP3`)}</a>
        <span>{t(`indDescrSecondP4`)}</span>
      </div>
      <span style={{display: 'block', padding: '10px 0'}}>{t(`indDescrThird`)}</span>
      <p>{t(`indDescrFours`)}</p>
      <span style={{display: 'block'}}>{t(`indDescrFifth`)}</span>
    </div>
    <AuthorOfTheDay data={data}/>
    <Team data={team}/>
  </Layout>
)
} 

export default withI18next()(withNamespaces()(IndexPage));

export const postQuery = graphql`
query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }

    javascriptFrontmatter(frontmatter: { authorOfTheDay: { eq: "true"} }) { 
      frontmatter {
        name
        img
        date
        path
        vita
       }
      }
  }`
