import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, Dimensions, Alert} from 'react-native';
import { Container, Content, Button, StyleProvider } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Progress from 'react-native-progress';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#1d1b25',
		justifyContent: 'space-between'
	},
	pic: {
		width: win.width/1.5,
		height: win.width/1.5,
		resizeMode: 'contain',
		marginTop: 0
	},
	name: {
			color: 'white',
			fontWeight: 'bold',
			fontSize: responsiveFontSize(4),
			marginTop: 20,
			marginBottom: 30,
			width: win.width,
			textAlign: 'center'
	},
	buttonText: {
		color:'white',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	},
	noButtonText: {
		color:'#1d1b25',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	}
});

const buttonTheme = {
		'NativeBase.Button': {
			bottom: 10,
			width: win.width - 40,
			height: 60, 
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 5,
			borderColor: '#64dd17',
			backgroundColor: 'green',
			marginBottom: 5
		}
};


const noButtonTheme = {
		'NativeBase.Button': {
			bottom: 10,
			width: win.width - 40,
			height: 60, 
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 5,
			borderColor: '#1d1b25',
			backgroundColor: '#1d1b25',
			marginBottom: 5
		}
};


export default class Learn extends Component {
	constructor(props){
		super(props);
		this.state = {progress: 0, done: true, name: 'Pavadinimas'};
		
		if (this.refs.myRef){
			this.setState(previousState => {
				return { progress: 0}
			});
		}
		
		setTimeout(() => {
			if(this.state.progess != 0.65){
				this.setState(previousState => {
					return { progress: 0.65}
				});
			}
		}, 1000);
	}
	
	static navigationOptions = {
		header: null
	};
	render() {
		const { navigate } = this.props.navigation;
		
		return (
			<Container>
				<View style={styles.background}>
					<View>
						<Progress.Bar progress={this.state.progress}
							width={win.width} height={10} borderRadius = {0}
							borderWidth = {0} animate={true} color='green'
						/>
						<View ref="myRef">
							<Text style={{color: '#1d1b25'}}> {this.state.progress} </Text>
						</View>
						
						<Text style={styles.name}>{this.state.name}</Text>
					</View>
					
					{this.props.children}
					
					<StyleProvider style={(this.state.done) ? noButtonTheme : buttonTheme}>
						<Button full onPress={() => alert('hi')} disabled={this.state.done}>
							<Text style={(this.state.done) ? styles.noButtonText : styles.buttonText}>Tęsti</Text>
						</Button>
					</StyleProvider>
				</View> 
			</Container>
		);
	}
}
