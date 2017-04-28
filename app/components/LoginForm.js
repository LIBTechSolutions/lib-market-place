'use strict'

import React from 'react'
import {Link, IndexLink} from 'react-router'


export default class LoginForm extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (
            <div className='login-Form'>
              <form>
                     <input type="Text"
                      placeholder='Please Enter Your User Name'
                      />
                        <input type="Text"
                          placeholder='Please Enter Your Password'
                          />
                        <button className='button expanded'>Login</button>
                  </form>
                  <div>
                        <p> Dont have an account?   <Link to="SignUpForm" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Sign Up Here</Link></p>
                  </div>
                  </div>
    )
  }
}
