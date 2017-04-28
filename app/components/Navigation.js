'use strict'

import React from 'react'
import {Link, IndexLink} from 'react-router'


export default class Navigation extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">LIB Market Place</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to="deals" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Deals</Link>
            </li>
            <li>
              <Link to="login" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
