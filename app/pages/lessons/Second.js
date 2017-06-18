import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions, TouchableOpacity
} from 'react-native';
import Learn from '../Learn';

import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Toast } from 'native-base';

const wid = Dimensions.get("window");
import words from './words';


export default class SecondLesson extends Component {

    static navigationOptions = {
		header: null
	};

    constructor(props){
        super(props);
        shuffle(words);
        this.state = {
            progress: 0, done: true,
            id: 0, total_id: 5, current: words[0].en, user: "",
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                progress: .001
            });
            this.forceUpdate();
        }, 1);
    }

    setNewWord(){
        this.setState({
            id: this.state.id + 1,
            user: "",
            current: words[this.state.id + 1].en
        });
    }

    addLetter(letter){
        this.setState({
            user: this.state.user + letter,
        });
    }

    checkNext(){
        if(this.state.id === this.state.total_id)
            this.props.navigation.navigate('Success');
        else {
            if(this.state.user == words[this.state.id].en){
                this.setNewWord();
                this.setState({
                    progress: this.state.progress + (1/6),
                });
            } else {
                Toast.show({
                    supportedOrientations: ['portrait','landscape'],
                    text: 'Neteisingai!',
                    position: 'bottom',
                    type: 'danger',
                    duration: 2000
                });
                this.setState({
                    id: this.state.id,
                    user: "",
                    current: words[this.state.id].en
                });
            }
        }
    }

    render(){
        var letters = [];
        for(var i = 0; i < this.state.current.length; i++){
            const raide =  this.state.current[i];
            letters.push(<Text onPress={() => { this.addLetter(raide); this.setState({ current: this.state.current.replace(raide, '') }); }} key={uuid()} style={styles.letter}>{raide.toUpperCase()}</Text>);
        }

        shuffle(letters);

        var added_letters = [];
        for(var i = 0; i < words[this.state.id].en.length; i++)
            added_letters.push(<Text key={uuid()} style={styles.letter}>{this.state.user.charAt(i).toUpperCase()}</Text>);

        return (
            <Learn fun={this.checkNext.bind(this)} title="Sudėliok" progress={this.state.progress} done={this.state.done}>
                <Image
                style={styles.image} 
                source={words[this.state.id].image} />
                <Text style={styles.name}>{words[this.state.id].lt.toUpperCase()}</Text>
                <View style={{
						 flexDirection: 'row', justifyContent: 'flex-end', flex: .5, flexWrap: 'wrap'
					}}>{added_letters}</View>
                <View style={{
						 flexDirection: 'row', justifyContent: 'flex-end', flex: 1, flexWrap: 'wrap'
					}}>{letters}</View>
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
	},
    letter: {
        width: 30,
        height: 30,
        color: 'white',
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        backgroundColor: '#F4511E',
				fontWeight: 'bold',
        borderRadius: 5,
        margin: 5,
    }
});


 function uuid() {
        var i, random;
        var uuid = '';
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }

            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }

        return uuid;
    }

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
