import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, Dimensions
} from 'react-native';

import { Container, Content, Button, StyleProvider } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
	render(){
        const styles = this.props.style;
        const { navigate } = this.props.navigation;
		return(
			<Container>
                <Image style={styles_.backgroundImage} source={require('../images/login.png')}>
                    <Image style={styles_.logo} source={require('../images/logo.png')}></Image>
                    <Text style={styles_.text}>PAVADINIMAS</Text>
                    <Text style={styles_.desc}>Prisijunk ir išmok anglų kalbą!</Text>
                    <StyleProvider style={fbTheme}>
                        <Button full bordered rounded>
                            <Text style={{color:'white', flex: 1, paddingTop: 10}}>Prisijungti su Facebook</Text>
                        </Button>
                    </StyleProvider>
                    <StyleProvider style={buttonTheme}>
                        <Button full bordered rounded customStyleProp onPress={() => { navigate('Intro') }}>
                            <Text style={{color:'white', flex: 1, paddingTop: 10}}>Tęsti kaip svečias</Text>
                        </Button>
                    </StyleProvider>
                </Image> 
			</Container>
		);
	}
}

const win = Dimensions.get('window');
const styles_ = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        width: win.width,
        height: win.height,
        resizeMode: 'center',
        alignItems: 'center',
        backgroundColor: '#f7b25f',
        resizeMode: "stretch"
    },
    logo: {
        width: win.width/1.5,
        height: win.width/1.5,
        resizeMode: 'contain',
        marginTop: 0
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 38,
        
        width: win.width,
        marginLeft: win.width/9,
    },
    desc: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        
        width: win.width,
        marginLeft: win.width/4+15,
        marginBottom: 100,
    },
});

const buttonTheme = {
    'NativeBase.Button': {
      marginBottom: 5,
      width: win.width - 20,
      height: 60, 
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      borderColor: '#EF6C00',
      backgroundColor: 'rgba(239,108,0, 0.25)'
    }
};

const fbTheme = {
    'NativeBase.Button': {
      marginBottom: 5,
      width: win.width - 20,
      height: 60, 
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      borderColor: 'rgb(59,89,152)',
      backgroundColor: 'rgba(59,89,152, 0.25)'
    }
};