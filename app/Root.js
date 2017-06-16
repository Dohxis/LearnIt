import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Intro from './pages/Intro';
import User from './pages/User';


export default class Root extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
        const { navigate } = this.props.navigation;
		return(
			<View>
				<Intro/>
                <Button onPress={() => navigate("User")}
                title="Go to user"/>
			</View>
		);
	}
}
