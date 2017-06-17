import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Container, Content, Thumbnail, Text, List, ListItem } from 'native-base';
import * as Progress from 'react-native-progress';

export default class user extends Component {
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

	static navigationOptions = {
        title: 'Guest',
		headerTintColor: '#FFFFFF',
		headerStyle: {
			backgroundColor: '#FF9800',
		},
		headerTitleStyle: {
			color: '#FFFFFF',
			alignItems: 'center',
			justifyContent: 'center'
		}
	};
	render() {
        return (
            <View>
				<View style={styles.center}>
	                <Image style={styles.image} source={require('../components/img/two.png')} >
						<Progress.Bar style={styles.progress} progress={this.state.progress}
                        width={win.width} height={10} borderRadius = {0}
                        borderWidth = {0} animate={true}/>
					</Image>
				</View>
				<View>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>Level: 5</Text>
                            <Text style={styles.text}>                                              1550/3200 xp </Text>
                        </ListItem>
                        <ListItem>
                            <Text>Level:</Text>
                        </ListItem>
                    </List>
				</View>
            </View>
        );
    }
}

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
