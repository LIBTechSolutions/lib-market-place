'use strict'

import React from 'react'
import {Link, IndexLink} from 'react-router'


export default class LoginForm extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='form'>
        <div className='container'>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Password'/>
          <button className='button expanded'>Login</button>
        </form>
        <div>
          <p> Dont have an account?   <Link to="signup" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Signup</Link></p>
        </div>
      </div>
    </div>
       )
    }
 }
