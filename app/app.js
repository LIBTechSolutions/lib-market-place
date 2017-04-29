import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Categories from 'Categories'
import Deals from 'Deals'

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="deals" component={Deals}/>
      <IndexRoute component={Categories}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
