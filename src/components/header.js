import { Link } from 'gatsby'
import PropTypes from 'prop-types'
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
        <div><a href="/">На главную</a></div>
        <div><a href="/">К списку архитекторов</a></div>
      </nav>
    </div>
  </div>
);


export default Header
