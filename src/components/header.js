import { Link } from 'gatsby'
import React from 'react'

import "./header.css"

  
const Header = () => (
  <div
    style={{
      background: `rebeccapurple`,
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
          style={{color: `white`,textDecoration: `none`}}
        >
          Архитекторы Беларуси
        </Link>
      </h1>
      <nav className="navHeader">
        <div><a><Link to="/">На главную</Link></a></div>
        <div><a><Link to="/search">К списку архитекторов</Link></a></div>
      </nav>
    </div>
  </div>
);


export default Header
