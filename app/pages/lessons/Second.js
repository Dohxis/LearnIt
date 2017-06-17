import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import Learn from '../Learn';

const wid = Dimensions.get("window");
import words from './words'

export default class SecondLesson extends Component {

    static navigationOptions = {
		header: null
	};

    constructor(props){
        super(props);
        this.state = {
            progress: 0, done: false,
            cur_id: 0, total_id: 6,
            cur_word: "", needed_word: "",
            cur_image: ""
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

    render(){
        return (
            <Learn title="Sudėliok" progress={this.state.progress} done={this.state.done}>
                <Image 
                style={{ width: 250, height: 250 }} 
                source={words[this.state.cur_id].image} />

            </Learn>
        );
    }

}