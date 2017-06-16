import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Intro from './pages/Intro';
import User from './pages/User';
import { Container, Content, Button, Text } from 'native-base';


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
                <Button primary onPress={() => navigate("User")}><Text>Go to user</Text></Button>
			</View>
		);
	}
}
