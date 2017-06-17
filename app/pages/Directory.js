import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {Text, Button} from 'native-base';

export default class Directory extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View>
                <Button onPress={() => navigate("User")}>
					<Text> Go to user </Text>
				</Button>
				<Button onPress={() => navigate("Difficulty")}>
					<Text> Go to Difficulty </Text>
				</Button>
				<Button onPress={() => navigate("Intro")}>
					<Text> Go to Intro </Text>
				</Button>
				<Button onPress={() => navigate("Learn")}>
					<Text> Go to Learn </Text>
				</Button>
				<Button onPress={() => navigate("Lessons")}>
					<Text> Go to Lessons </Text>
				</Button>
				<Button onPress={() => navigate("Login")}>
					<Text> Go to Login </Text>
				</Button>
			</View>
		);
	}
}
