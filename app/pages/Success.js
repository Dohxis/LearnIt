import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image,
	Alert,
	TouchableOpacity
} from 'react-native';
import Learn from './Learn';
import words from './lessons/words';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Container, Content, Button, StyleProvider } from 'native-base';
import * as Progress from 'react-native-progress';
import firebase from '../firebase';

const win = Dimensions.get('window');

const buttonTheme = {
		'NativeBase.Button': {
			width: win.width - 10,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 0,
			borderColor: '#64dd17',
			backgroundColor: '#388E3C',
		}
};

export default class Success extends Component {
		static navigationOptions = {
		header: null
	};

		constructor(props){
				super(props);
				this.state = {progress: 1, done: true};
		};

		componentDidMount(){
				setTimeout(() => {
						this.setState({
								progress: 1
						});
						this.forceUpdate();
				}, 1);

		};

	checkNext(){
		var ref = firebase.database();
		var points = ref.ref("/points");
		var streak = ref.ref("/streak");

		points.once("value", function(snapshot) {
			points.set(snapshot.val() + 10);
		});

		streak.once("value", function(snapshot) {
			if(snapshot.val() == 0)
				streak.set(1);
		});
		this.props.navigation.navigate('Lessons')
	}

		render(){
			return (
				<View style={styles.background}>
					<View style={styles.center}>
						<Image style={styles.image} source={require('../images/icon.png')} />
						<Text style={styles.grats}> Sveikiname! </Text>
						<Text style={styles.text}> Jūs surinkote 10 taškų ir įveikėte šią pamoką</Text>
					</View>
					
					<StyleProvider style={buttonTheme}>
						<Button full onPress={() => this.checkNext()}>
							<Text style={styles.buttonText}>Toliau</Text>
						</Button>
					</StyleProvider>
				</View>
			);
		}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: win.width,
		backgroundColor: '#1d1b25',
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		width: win.width,
		flex: 1,
		alignItems: 'center',
	},
	grats: {
		color: '#fff',
		fontSize: 35,
		fontWeight: "bold",
		paddingTop: 20,
		textAlign: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		paddingTop: 30,
		textAlign: 'center',
	},
	image: {
		width: win.width / 2,
		height: win.width / 2,
	},
	buttonText: {
		color:'white',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	},
});
