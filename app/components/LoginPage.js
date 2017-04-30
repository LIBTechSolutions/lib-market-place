'use strict'

import React from 'react'
import LoginForm from 'LoginForm'



export default class LoginPage extends React.Component {
     constructor (props) {
       super(props)
     }


  render() {
    return (
      <div>
      <h1 className='page-title'>Sign In</h1>
      <LoginForm />
      </div>
    )
  }

}
