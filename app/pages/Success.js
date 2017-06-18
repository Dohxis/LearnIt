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
			bottom: 8,
			width: win.width - 10,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 0,
			borderColor: '#64dd17',
			backgroundColor: '#388E3C',
			marginBottom: 110,
			marginTop: 80
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
			<View style={styles.center}>
				<Image style={styles.image} source={require('../images/icon.png')} />
				<Text style={styles.text}> Jūs įveikėte šią pamoką </Text>
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
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		width: win.width,
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#1d1b25',
	},
	text: {
		color: '#fff',
		fontSize: responsiveFontSize(3.8),
		fontWeight: "bold",
		paddingBottom: 10,
		paddingTop: 10,
		bottom: 80,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: win.width / 2,
		height: win.width / 2,
		marginBottom: 120,
		marginTop: 245,
		top: 20
	},
	buttonText: {
		color:'white',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	},
	noButtonText: {
		color:'#9E9E9E',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	}
});
