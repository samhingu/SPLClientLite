import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import App from './containers/app'
import Links from './containers/links'
import Home from './components/home'

import './index.css'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/About" component={Links} />
      <Route path="/Home" component={Home} />
    </Route>
  </Router>
  ,document.getElementById('root')
)
