import React, { Component } from 'react';
import {Button, Text, View} from 'react-native'

export default class Difficulty extends Component {
  static navigationOptions = {
    title: 'Choose your difficulty',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
	  	Hi
	  </View>
    );
  }
}
