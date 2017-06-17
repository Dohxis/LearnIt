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
import Learn from './Learn';
import words from './lessons/words';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const randomWords = [
		['Iki', 'Gamta', 'Labas', 'HackerGames'],
		['Iki', 'Kelionė', 'Gerai', 'Miestas'],
		['Žmogus', 'Aš', 'Moteris', 'Nuotaka'],
		['Nuotrauka', 'Žmogus', 'Labas', 'Tu'],
		['Herbas', 'Vyras', 'Vizitinė', 'Vardas'],
		['Ačiū', 'Karas', 'Aš', 'Moteris']
];

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
		this.props.navigation.navigate('Lessons')
	}

    render(){
        return (
            <Learn fun={this.checkNext.bind(this)} title="Sveikiname!" progress={this.state.progress} done={this.state.done}>
				<View style={styles.center}>
					<Image style={styles.image} source={require('../images/icon.png')} />
					<Text style={styles.text}> Jūs įveikėte šią pamoką </Text>
				</View>
            </Learn>
        );
    }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		width: win.width,
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
		marginBottom: 120
	}
});
