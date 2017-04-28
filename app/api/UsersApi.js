'use strict'

import $ from 'jquery'

export function setUsers(users) {
  if ($.isArray(users)) {
    localStorage.setItem('users', JSON.stringify(users))
    return users
  }
}

export function getUsers() {
  let stringUsers = localStorage.getItem('users')
  let users = []

  try {
    users = JSON.parse(stringUsers)
  } catch (e) {

  }

  return $.isArray(users) ? users : []
}
