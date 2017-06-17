import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {StackNavigator,} from 'react-navigation';

import Root from './app/Root';
import User from './app/pages/User';
import Lessons from './app/pages/Lessons';
import Learn from './app/pages/Learn';
import Difficulty from './app/pages/Difficulty';
import Login from './app/pages/Login';
import Directory from './app/pages/Directory';
import Intro from './app/pages/Intro';
import SecondLesson from './app/pages/lessons/Second';
import FirstLesson from './app/pages/lessons/First';
import Success from './app/pages/Success';

const App = StackNavigator({
    Home: { screen: Login},
    User: { screen: User},
    Lessons: { screen: Lessons },
    Learn: { screen: Learn},
    Difficulty: {screen: Difficulty},
    Login: {screen: Login},
    Intro: {screen: Intro},
	FirstLesson: {screen: FirstLesson},
    SecondLesson: {screen: SecondLesson},
	Success: {screen: Success}
}, { headerMode: 'screen' }
);

AppRegistry.registerComponent('learn', () => App);
