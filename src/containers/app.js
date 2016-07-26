import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { RouteTransition } from 'react-router-transition'

import { Link } from "react-router"

import configureStore from '../store'
import Notification from './notification'

import logo from '../logo.png'
import './app.css';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to SPL Client Lite</h2>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
          </div>
           <RouteTransition
    pathname={this.props.location.pathname}
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
  >
    {this.props.children}
  </RouteTransition>
           <Notification />
        </div>
      </Provider>
    );
  }
}

export default App;
