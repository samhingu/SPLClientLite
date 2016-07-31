import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import App from './containers/app'
import Links from './containers/links'
import AddLink from './containers/addLink'

import './index.css'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AddLink} />
      <Route path="/About" component={Links} />
      <Route path="/AddLink" component={AddLink} />
    </Route>
  </Router>
  ,document.getElementById('root')
)
