import { Link } from 'gatsby'
import React from 'react'

import "./header.css"

  
const Header = () => (
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
          Архитекторы Беларуси
        </Link>
      </h1>
      <nav className="navHeader">
        <div><Link to="/">На главную</Link></div>
        <div><Link to="/search">К списку архитекторов</Link></div>
      </nav>
    </div>
  </div>
);


export default Header
