import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Learn from '../Learn';

export default class SecondLesson extends Component {

    static navigationOptions = {
		header: null
	};

    constructor(props){
        super(props);
        this.state = {progress: 0, done: false};
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
                <Text>Hello</Text>
            </Learn>
        );
    }

}