import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Directory from './pages/Directory'

export default class Root extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
        return(
            <View>
                <Directory> </Directory>
            </View>
        )
	}
}
