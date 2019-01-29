import { Link } from 'gatsby-plugin-i18next'
import React from 'react'
import LanguageSwitcher from './languageSwitcher'
import './header.css'

const Header = ({ t }) => (
  <div className="header-wrapper">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="headLogo" id="toTop">
        <Link to="/">{t(`headTitle`)}</Link>
      </h1>
      <nav className="navHeader">
        <div>
          <Link to="/">{t(`headMain`)}</Link>
        </div>
        <div>
          <Link to="/search">{t(`headToList`)}</Link>
        </div>
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
)

export default Header
