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
			marginTop: 0,
			marginBottom: 0,
			paddingTop: 0,
			paddingBottom: 0,
			justifyContent: "center",
			width: win.width,
			textAlign: 'center',
			backgroundColor: '#D84315'
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
			marginBottom: 0
		}
};

const noButtonTheme = {
		'NativeBase.Button': {
			bottom: 8,
			width: win.width - 10,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 0,
			borderColor: '#1d1b25',
			backgroundColor: '#424242',
			marginBottom: 0
		}
};



export default class Learn extends Component {
	render() {
		console.warn(this.props.done);
		return (
			<Container>
				<View style={styles.background}>
					<View>
						<Progress.Bar progress={this.props.progress}
							width={win.width} height={10} borderRadius = {0}
							borderWidth = {0} animate={false} color='green'
						/>

						<Text style={styles.name}>{this.props.title}</Text>
					</View>

					{this.props.children}

					<StyleProvider style={(this.props.done) ? buttonTheme : noButtonTheme}>
						<Button full onPress={() => this.props.fun()} disabled={!this.props.done}>
							<Text style={(!this.props.done) ? styles.noButtonText : styles.buttonText}>Toliau</Text>
						</Button>
					</StyleProvider>
				</View>
			</Container>
		);
	}
}
