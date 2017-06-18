import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import Learn from '../Learn';
import words from './words';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const randomWords = [
		['Iki', 'Gamta', 'Labas', 'HackerGames'],
		['Iki', 'Kelionė', 'Gerai', 'Miestas'],
		['Žmogus', 'Aš', 'Moteris', 'Nuotaka'],
		['Nuotrauka', 'Žmogus', 'Labas', 'Tu'],
		['Herbas', 'Vyras', 'Vizitinė', 'Vardas'],
		['Ačiū', 'Karas', 'Aš', 'Moteris']
];

export default class FirstLesson extends Component {
    static navigationOptions = {
		header: null
	};

    constructor(props){
        super(props);
        this.state = {progress: 0, done: false, id: 0};
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                progress: .001,
				id: 0
            });
            this.forceUpdate();
        }, 1);

    };

	//CANCER -- NEBUVO LAIKO, NEPYKIT POTENCIALUS DARBDAVIAI

	_onPress1() {
		if(randomWords[this.state.id][0] == words[this.state.id].lt){
		  	this.setState({
					done: true
			});
		}
  	};

	_onPress2() {
		if(randomWords[this.state.id][1] == words[this.state.id].lt){
		  	this.setState({
					done: true
			});
		}
	};

	_onPress3() {
		if(randomWords[this.state.id][2] == words[this.state.id].lt){
		  	this.setState({
					done: true
			});
		}
  	};

	_onPress4() {
		if(randomWords[this.state.id][3] == words[this.state.id].lt){
		  	this.setState({
					done: true
			});
		}
  	};

	//CANCER

	checkNext(){
		this.setState({
				done: false
		});
		this.setState(previousState => {
 			return { progress: previousState.progress + (1/6)}
 		});
		if(this.state.id < 5){
			this.setState(previousState => {
 				return { id: previousState.id + 1}
 			});
		}
		else{
			this.props.navigation.navigate('Success')
		}
    }

    render(){
        return (
            <Learn fun={this.checkNext.bind(this)} title="Pasirink" progress={this.state.progress} done={this.state.done}>
                <Text style={styles.name}> {words[this.state.id].en.toUpperCase()} </Text>
				<Image style={styles.image} source={words[this.state.id].image}/>
				<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress1.bind(this)}>
						<Text style={styles.text}>{randomWords[this.state.id][0]}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress2.bind(this)}>
						<Text style={styles.text}>{randomWords[this.state.id][1]}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress3.bind(this)}>
						<Text style={styles.text}>{randomWords[this.state.id][2]}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress4.bind(this)}>
						<Text style={styles.text}>{randomWords[this.state.id][3]}</Text>
					</TouchableOpacity>
				</View>
            </Learn>
        );
    }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
		padding: 15,
		paddingTop: 0
	},
	image: {
		marginBottom: 5,
		width: win.width,
		height: 250,
	},
	name: {
		color: '#fff',
		fontSize: responsiveFontSize(3.8),
		fontWeight: 'bold',
		width: win.width,
		textAlign: 'center',
		backgroundColor: "#F4511E",
		paddingTop: 10,
		paddingBottom: 10
	},
	text: {
		color: '#fff',
		fontSize: responsiveFontSize(2),
		fontWeight: "bold",
		width: 170,
		textAlign: 'center'
	},
	buttonRight:{
		margin: 5,
		width: 170,
		height: 50,
		borderRadius: 0,
		borderWidth: 0,
		backgroundColor: "#D84315",
		borderColor: "#000000",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: 'column'
	}
});
