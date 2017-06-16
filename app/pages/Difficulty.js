import React, { Component } from 'react';
import {Button, Text, View} from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
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
