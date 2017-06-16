import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
		return(
			<View>
				<Text> Login </Text>
			</View>
		)
	}
}
