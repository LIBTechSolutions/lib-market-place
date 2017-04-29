import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Categories from 'Categories'
import Deals from 'Deals'
import SignUp from 'SignUp'

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="deals" component={Deals}/>
      <Route path="signup" component={SignUp}/>
      <IndexRoute component={Categories}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
