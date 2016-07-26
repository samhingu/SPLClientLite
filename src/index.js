import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import App from './containers/app'
import About from './components/about'

import './index.css'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="/About" component={About} />
    </Route>
  </Router>
  ,document.getElementById('root')
)
