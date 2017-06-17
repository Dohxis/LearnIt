import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Button,
  Alert
} from 'react-native';
import Learn from '../Learn';
import words from './words';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
	  Alert.alert('on Press!');
  };

    render(){
        return (
            <Learn title="Sudėliok" progress={this.state.progress} done={this.state.done}>
                <Text style={styles.name}> {words[this.state.id].en.toUpperCase()} </Text>
				<Image style={styles.image} source={words[this.state.id].image}/>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={styles.buttonRight}>
						<Button height={50} title="Hello" onPress={this._onPress}/>
					</View>
					<View style={styles.buttonRight}>
						<Button title="Hello" onPress={this._onPress}/>
					</View>
			    </View>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={styles.buttonRight}>
						<Button title="Hello" onPress={this._onPress}/>
					</View>
					<View style={styles.buttonRight}>
						<Button title="Hello" onPress={this._onPress}/>
					</View>
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
		marginBottom: 15,
		width: 250,
		height: 250,
	},
	name: {
		color: '#fff',
		fontSize: responsiveFontSize(3.8),
		fontWeight: 'bold',
		bottom: 5,
		width: win.width,
		textAlign: 'center'
	},
	text: {
		color: '#fff',
		fontSize: responsiveFontSize(1.8),
		textAlign: 'justify',
		width: win.width - 40,
	},
	buttonRight:{
		marginRight: 20,
		marginLeft: 20,
		width: 105,
		height: 50,
		borderRadius: 100,
	}
});
