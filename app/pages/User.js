import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Container, Content, Thumbnail, Text } from 'native-base';


export default class user extends Component {
	static navigationOptions = {
        title: 'Guest',
		headerTintColor: '#FFFFFF',
		headerStyle: {
			backgroundColor: '#FF9800',
		},
		headerTitleStyle: {
			color: '#FFFFFF',
			alignItems: 'center',
			justifyContent: 'center'
		}
	};
	render() {
        return (
            <View>
				<View style={styles.center}>
	                <Image style={styles.image} source={require('../components/img/two.png')} />
				</View>
				<View>
					<Text> Hi </Text>
				</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	center: {
      	justifyContent: 'center',
      	alignItems: 'center',
    },
	image: {
		width: 200,
  	  	height: 200,
		borderRadius: 100,
		marginTop: 10
	}
});
