import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Categories from 'Categories'
import Deals from 'Deals'
import LoginPage from 'LoginPage'
import LoginForm from 'LoginForm'
import SignUp from 'SignUp'
import Fashion from 'Fashion'
import LocalMarket from 'LocalMarket'

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="market" component={LocalMarket}/>
      <Route path="fashion" component={Fashion}/>
      <Route path="signup" component={SignUp}/>
      <Route path="deals" component={Deals}/>
      <Route path="login" component={LoginPage}/>
      <IndexRoute component={Categories}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
