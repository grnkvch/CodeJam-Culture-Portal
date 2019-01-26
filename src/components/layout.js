import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Team from './Team';
import AuthorOfTheDay from './AuthorOfTheDay';

import './layout.css';

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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <div style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
        }}>

          {children}

          <AuthorOfTheDay />
          <Team data={team}/>
         
          <footer>
           
          </footer>
        </div>
      </>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
