import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';
import * as Progress from 'react-native-progress';


const win = Dimensions.get('window');
const styles = StyleSheet.create({
	center: {
      	justifyContent: 'center',
      	alignItems: 'center',
    },
	image: {
		width: win.width,
  	  	height: 300,
	},
	progress: {
		marginTop: 290
	},
    align: {
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 50
    }
});


export default class Learn extends Component {
	constructor(props){
		super(props);
		this.state = {progress: 0};
		
		this.setState(previousState => {
			return { progress: 0}
		});
		
		setTimeout(() => {
			if(this.state.progess != 0.65){
				this.setState(previousState => {
					return { progress: 0.65}
				});
			}
		}, 1000);
	}
	
	render(){
		return(
			<View>
				
				<Progress.Bar style={styles.progress} progress={this.state.progress}
					width={win.width} height={10} borderRadius = {0}
					borderWidth = {0} animate={true}
				/>
				
				
			</View>
		)
	}
}
