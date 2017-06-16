import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator,} from 'react-navigation';

import Root from './app/Root';
import User from './app/pages/User';
import Lessons from './app/pages/Lessons';
import Learn from './app/pages/Learn';
import Difficulty from './app/pages/Difficulty';
import Login from './app/pages/Login';
import Directory from './app/pages/Directory';

const App = StackNavigator({
    Home: { screen: Directory },
    Root: {screen: Root},
    User: { screen: User},
    Lessons: { screen: Lessons },
    Learn: { screen: Learn},
    Difficulty: {screen: Difficulty},
    Login: {screen: Login}

},
{ headerMode: 'screen' }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('learn', () => App);
