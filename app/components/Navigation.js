'use strict'

import React from 'react'
import {Link, IndexLink} from 'react-router'


export default class Navigation extends React.Component {
  constructor () {
    super()
  }

  handleSearch (searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    })
  }

  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">LIB Market Place</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Categories</IndexLink>
            </li>
            <li>
              <IndexLink to="/market" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Local Market</IndexLink>
            </li>
            <li>
              <IndexLink to="/fashion" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Fashion</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to="/signup" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Sign Up</Link>
            </li>
            <li>
              <Link to="/deals" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Deals</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
