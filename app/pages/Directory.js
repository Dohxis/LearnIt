import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Directory extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View>
                <Button onPress={() => navigate("User")}
                title="Go to user"/>
				<Button onPress={() => navigate("Difficulty")}
                title="Go to Difficulty"/>
				<Button onPress={() => navigate("Intro")}
                title="Go to Intro"/>
				<Button onPress={() => navigate("Learn")}
                title="Go to Learn"/>
				<Button onPress={() => navigate("Lessons")}
                title="Go to Lessons"/>
				<Button onPress={() => navigate("Login")}
                title="Go to Login"/>
			</View>
		);
	}
}
