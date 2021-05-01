import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Dashboard from './app/src/scenes/Screens/Dashboard';
import {Login} from './app/src/scenes/Screens/Login';
import {myStore, persistor} from './app/src/scenes/redux/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Login />
        </PersistGate>
      </Provider>
    );
  }
}
