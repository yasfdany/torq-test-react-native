import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const RNRedux = () => (
  <Provider store = { store }>
    <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);