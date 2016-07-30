import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { RouteTransition } from 'react-router-transition'

import configureStore from '../store'
import Notification from './notification'

import Header from '../components/_header'

import './app.css';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <RouteTransition
  pathname={this.props.location.pathname}
  atEnter={{ opacity: 0 }}
  atLeave={{ opacity: 0 }}
  atActive={{ opacity: 1 }}
  mapStyles={(styles) => {
    return {
      position: (styles.opacity === 1) ? undefined: 'absolute',
      width: (styles.opacity === 1) ? undefined : '100%',
      //height: (styles.opacity === 1) ? undefined : '100%',
      opacity: styles.opacity,
    }
  }}>
  <div className="mt-10">
    {this.props.children}
  </div>
</RouteTransition>
           <Notification />
        </div>
      </Provider>
    );
  }
}

export default App;
