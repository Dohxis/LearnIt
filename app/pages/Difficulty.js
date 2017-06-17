import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';
import { Container, Content, Button, StyleProvider } from 'native-base';

const win = Dimensions.get('window');
const styles_ = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#5e35b1',
	},
	pic: {
		width: win.width/1.5,
		height: win.width/1.5,
		resizeMode: 'contain',
		marginTop: 0
	},
	text: {
			color: 'white',
			fontWeight: 'bold',
			fontSize: 38,
			marginBottom: 30,
			width: win.width,
			marginLeft: win.width/9,
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
			borderColor: '#1a237e',
			backgroundColor: '#1a237e',
			marginBottom: 5
		}
};


export default class Difficulty extends Component {
	static navigationOptions = {
		title: 'Pasirinkite savo lygį',
		header: null
	};
	render() {
		const { navigate } = this.props.navigation;
		
		
		return (
			<Container>
				<View style={styles_.background}>
					<Image style={styles_.pic} source={require('../images/open-book.png')}></Image>
					<Text style={styles_.text}>Pasirinkite savo lygį</Text>
					<StyleProvider style={buttonTheme}>
						<Button full onPress={() => navigate("Lessons")}>
							<Text style={{color:'white', flex: 1, paddingTop: 10, fontSize: 20}}>Pradedantysis</Text>
						</Button>
					</StyleProvider>
					<StyleProvider style={buttonTheme}>
						<Button full onPress={() => navigate("Lessons")}>
							<Text style={{color:'white', flex: 1, paddingTop: 10, fontSize: 20}}>Pažengęs</Text>
						</Button>
					</StyleProvider>
					<StyleProvider style={buttonTheme}>
						<Button full onPress={() => navigate("Lessons")}>
							<Text style={{color:'white', flex: 1, paddingTop: 10, fontSize: 20}}>Įgudęs</Text>
						</Button>
					</StyleProvider>
				</View> 
			</Container>
		);
	}
}
