/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import BottomNav from '../navigators/tabNavigator';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from '../store'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <BottomNav></BottomNav>
    </Provider>
  );
};

export default App;
