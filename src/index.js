import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import App from './containers/app'
import Links from './containers/links'
import AddLink from './containers/addLink'
import LinkCard from './components/linkCard'

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css'
injectTapEventPlugin()

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LinkCard} />
      <Route path="/LinkCard" component={LinkCard} />
      <Route path="/About" component={Links} />
      <Route path="/AddLink" component={AddLink} />
    </Route>
  </Router>
  ,document.getElementById('root')
)
