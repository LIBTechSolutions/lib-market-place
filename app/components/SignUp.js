'use strict'

import React from 'react'
import SignUpForm from 'SignUpForm'
import uuid from 'node-uuid'
import {setUsers, getUsers} from 'UsersApi'

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: getUsers()
    }
    this.handleUsers = this.handleUsers.bind(this)
  }
  componentDidUpdate (){
    setUsers(this.state.users)

  }
  handleUsers (yourName, userName, email, phoneNumber, password, reenterPassword) {
    this.setState({
      users: [
        ...this.state.users,
        {
          id: uuid(),
          yourName: yourName,
          userName: userName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          reenterPassword: reenterPassword
        }
      ]
    })
  }

  render () {
    return (
      <div>
        <h1 className='page-title'>Sign Up Now</h1>
            <SignUpForm onAddValue={this.handleUsers}/>
      </div>
    )
  }
}
