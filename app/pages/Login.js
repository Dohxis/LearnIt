import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, Dimensions
} from 'react-native';

import { Container, Content } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
		return(
			<Container>
                <View  style={styles.backgroundImage}>
                    <Image style={styles.logo} source={require('../images/logo.png')}></Image>
                    <Text style={styles.text}>PAVADINIMAS</Text>
                </View> 
			</Container>
		);
	}
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        width: win.width,
        height: win.height,
        resizeMode: 'cover',
        alignItems: 'center',
        backgroundColor: '#f7b25f'
    },
    logo: {
        width: win.width/2.5,
        height: win.height/2.5,
        resizeMode: 'center',
        marginTop: 50
    },
    text: {
        color: '#572805',
        fontWeight: 'bold',
        fontSize: 25,
        
        width: win.width,
        marginLeft: win.width/3
    }
});