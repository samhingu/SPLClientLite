import React, { Component } from 'react'
import { Provider } from 'react-redux'

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
          </div>
          {this.props.children}
           <Notification />
        </div>
      </Provider>
    );
  }
}

export default App;
