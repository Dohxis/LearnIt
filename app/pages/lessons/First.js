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
		['Viso', 'Kelionė', 'Gerai', 'Miestas'],
		['Žmogus', 'Aš', 'Moteris', 'Nuotaka'],
		['Nuotrauka', 'Žmogus', 'Labas', 'Tu'],
		['Viso', 'Kelionė', 'Gerai', 'Miestas'],
		['Viso', 'Kelionė', 'Gerai', 'Miestas']
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
                progress: .001
            });
            this.forceUpdate();
        }, 1);

    };

	_onPress() {
	  	this.setState({
				done: true
		});
		this.setState(previousState => {
 			return { progress: previousState.progress + (0.01)}
 		});
		this.setState(previousState => {
 			return { progress: previousState.id + 1}
 		});
  	};

    render(){
        return (
            <Learn title="Pasirink" progress={this.state.progress} done={this.state.done}>
                <Text style={styles.name}> {words[this.state.id].en.toUpperCase()} </Text>
				<Image style={styles.image} source={words[this.state.id].image}/>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress.bind(this)}>
						<Text style={styles.text}>Iki</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress.bind(this)}>
						<Text style={styles.text}>Gamta</Text>
					</TouchableOpacity>
			    </View>
				<View style={{flex: 1.5, flexDirection: 'row'}}>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress.bind(this)}>
						<Text style={styles.text}>Sveiki</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonRight} onPress={this._onPress.bind(this)}>
						<Text style={styles.text}>Hacker GAMES</Text>
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
		marginBottom: 30,
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
		fontSize: responsiveFontSize(2.8),
		fontWeight: "bold"
	},
	buttonRight:{
		marginRight: 8,
		marginLeft: 8,
		width: 170,
		height: 50,
		borderRadius: 0,
		borderWidth: 0,
		backgroundColor: "#D84315",
		borderColor: "#000000",
		alignItems: "center",
		justifyContent: "center"
	}
});
