import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Container, Content, Thumbnail, Text, List, ListItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as Progress from 'react-native-progress';
import firebase from '../firebase';

const win = Dimensions.get('window');

class InfoPanel extends Component {
	render(){
		return (
			<Col>
				<Text style={{
						backgroundColor: '#E0E0E0',
						margin: 10,
						marginRight: 5,
						padding: 10,
						textAlign: 'center',
						borderRadius: 5
					}}
				>
					<Text style={{color: '#424242'}}>{this.props.title}</Text>{"\n"}
					<Text style={{ fontWeight: 'bold', fontSize: 22, color: '#424242' }}>{this.props.value}</Text>
				</Text>
			</Col>
		);
	}
}

class ImagePanel extends Component {
	render(){
		return (
			<Col>
				<Image style={{
						backgroundColor: '#E0E0E0',
						margin: 10,
						padding: 10,
						textAlign: 'center',
						borderRadius: 5
					}}
					source={require(this.props.image)}
				/>
			</Col>
		);
	}
}

export default class user extends Component {

	constructor(props){
		super(props);

		this.state = {streak: 0, points: 0};

		this.guestRef = firebase.database();
	}

	componentDidMount() {
		this.guestRef.ref('/points').on('value', (snap) => {
			this.setState({
				points: snap.val()
			});
		});
		this.guestRef.ref('/streak').on('value', (snap) => {
			this.setState({
				streak: snap.val()
			});
		});
	}

	static navigationOptions = {
        title: 'Guest',
		headerTintColor: '#FFFFFF',
		headerStyle: {
			backgroundColor: '#D84315',
		},
		headerTitleStyle: {
			color: '#FFFFFF',
			alignItems: 'center',
			justifyContent: 'center'
		}
	};
	render() {
        return (
			<View style={{backgroundColor: '#1d1b25'}}>
				<View style={styles.center}>
	                <Image style={styles.image} source={require('../components/img/two.png')} >
					</Image>
				</View>
				<View>
					<Text style={{
						width: '95%',
						marginLeft: 10,
						marginRight: 10,
						borderBottomColor: '#E0E0E0',
						borderBottomWidth: 1,
						color: '#E0E0E0',
						marginBottom: 5,
					}}>Pasiekimai</Text>
					<View style={{
						 flexDirection: 'row', justifyContent: 'flex-end', flex: 1
					}}>
							<Image style={{
								width: 90,
								height:  120,
								resizeMode: 'stretch'
								}}
								source={require('../images/first_.png')}
							/>
							<Image style={{
								width: 90,
								height:  120,
								resizeMode: 'stretch',

								}}
								source={require('../images/some_.png')}
							/>
							<Image style={{
								width: 90,
								height:  120,
								resizeMode: 'stretch',

								}}
								source={require('../images/flag_.png')}
							/>
							<Image style={{
								width: 90,
								height:  120,
								resizeMode: 'stretch',

								}}
								source={require('../images/trophy_.png')}
							/>
						</View>
						<Text style={{marginBottom: 80}}>{"\n"}</Text>
						<View style={{
						 flexDirection: 'row', justifyContent: 'flex-end'
					}}>
							<InfoPanel title={"Taškai"} value={this.state.points} />
							<InfoPanel title={"Iš eilės"} value={this.state.streak} />
							</View>

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
		width: win.width + 45,
  	  	height: 337,
		resizeMode: 'stretch'
	},
	progress: {
		marginTop: 300
	},
    align: {
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 50
    }
});
