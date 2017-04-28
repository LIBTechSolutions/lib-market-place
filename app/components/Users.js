'use strict'

import React from 'react'

export default class Users extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {id, yourName, userName, email, phoneNumber, password, reenterPassword} = this.props
    return (
      <div>
        {id} {yourName} {userName} {email} {phoneNumber} {password} {reenterPassword}
      </div>
    )
  }

}
