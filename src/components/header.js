import { Link } from 'gatsby-plugin-i18next';
import React from 'react'
import LanguageSwitcher from './languageSwitcher';

import "./header.css"

  
const Header = ({ t }) => (
  <div
    style={{
      height: `160px`,
      marginBottom: '30px'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: "0  auto", width: "480px"}}>
        <Link
          to="/"
          style={{textDecoration: `none`}}
        >
          {t(`Архитекторы Беларуси`)}
        </Link>
      </h1>
      <nav className="navHeader">
        <div><Link to="/">На главную</Link></div>
        <div><Link to="/search">К списку архитекторов</Link></div>
      </nav>
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <LanguageSwitcher />
    </div>
    </div>
  </div>
);


export default Header
