import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'
import Main from 'Main'
import Home from 'Home'
import Deals from 'Deals'

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="deals" component={Deals}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
