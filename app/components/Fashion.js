
'use strict'

import React from 'react'
import UserList from 'UserList'
import {getUsers, filterUsers} from 'UsersApi'
import UserSearch from 'UserSearch'

export default class Fashion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: '',
      users: getUsers()
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    })
  }

  render () {
    let {users, searchText} = this.state
    let filteredUsers = filterUsers(users, searchText)
    console.log(filteredUsers)
    return (
      <div>
        <UserSearch onSearch={this.handleSearch}/>
        <div className='filter'>
        <UserList users={filteredUsers}/>
        </div>
      </div>
    )
  }
}
