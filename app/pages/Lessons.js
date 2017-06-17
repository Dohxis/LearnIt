import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import firebase from '../firebase';
import { Container, Content, Button, Icon, Fab } from 'native-base';


export default class Lessons extends Component {

	static navigationOptions = {
		title: 'Welcome',
		header: null
	};

	constructor(props){
		super(props);
		this.state = { task: 0, active: false };

		this.guestRef = firebase.database();
	}

		componentDidMount() {
		this.guestRef.ref('/task').on('value', (snap) => {
			this.setState({
				task: snap.val()
			});
		});
	}

	render () {
		const { navigate } = this.props.navigation;
		return (
			<View style={{
				backgroundColor: '#1d1b25',
				height: win.height - 25
			}}>
				<Carousel
				sliderWidth={sliderWidth}
				itemWidth={itemWidth}
				firstItem={0}
				inactiveSlideScale={0.94}
				inactiveSlideOpacity={0.6}
				enableMomentum={false}
				containerCustomStyle={styles.slider}
				contentContainerCustomStyle={styles.sliderContainer}
				showsHorizontalScrollIndicator={false}
				snapOnAndroid={true}
				removeClippedSubviews={false}
				>
				<TouchableOpacity
				activeOpacity={0.7}
				style={styles.slideInnerContainer}
				onPress={() => { alert(`You've clicked`); }}
				>
					<View>
						<View style={styles.imageContainer}>
						<Image
						source={require('../images/greet.jpg')}
						style={styles.image}
						>
						<View style={styles.textContainer}>
						<Text style={styles.title}>Greetings!</Text>
						<Text style={styles.subtitle} numberOfLines={2}>Pirmojoje pamokoje, išmoksime keletą paprastų žodžių.</Text>
						</View>
						</Image>
						<View style={styles.radiusMask} />
						</View>
					</View>
				</TouchableOpacity>


				<TouchableOpacity
				activeOpacity={0.7}
				style={styles.slideInnerContainer}
				onPress={() => { navigate('SecondLesson'); }}
				>
					<View>
						<View style={styles.imageContainer}>
						<Image
						source={require('../images/thank.jpg')}
						style={styles.image}
						>
						<View style={styles.textContainer}>
						<Text style={styles.title}>Thank you!</Text>
						<Text style={styles.subtitle} numberOfLines={2}>Šioje pamokoje išmoksime padėkoti savo pašnekovui.</Text>
						</View>
						</Image>
						<View style={styles.radiusMask} />
						</View>
					</View>
				</TouchableOpacity>


				<TouchableOpacity
				activeOpacity={0.7}
				style={styles.slideInnerContainer}
				onPress={() => { alert(`You've clicked`); }}
				>
					<View>
						<View style={styles.imageContainer}>
						<Image
						source={require('../images/goodbye.jpg')}
						style={styles.image}
						>
						<View style={styles.textContainer}>
						<Text style={styles.title}>Goodbye!</Text>
						<Text style={styles.subtitle} numberOfLines={2}>Pirmųjų pamokų ciklą užbaigsime atsisveikindami.</Text>
						</View>
						</Image>
						<View style={styles.radiusMask} />
						</View>
					</View>
				</TouchableOpacity>

			</Carousel>
				<Fab
	            active={this.state.active}
	            direction="left"
	            containerStyle={{ marginLeft: 10 }}
	            style={{ backgroundColor: '#D84315'}}
	            position="bottomRight"
	            onPress={() => navigate("User")}>
					<Icon style={{fontSize: 27, }} name="person" />
	            </Fab>
			</View>
       );
   }
}

const horizontalMargin = 5;
const slideWidth = 320;

function wp (percentage) {
    const value = (percentage * Dimensions.get('window').width) / 100;
    return Math.round(value);
}

const win = Dimensions.get('window');
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth;
const itemHeight = win.height;
const slideHeight = win.height - 50;
const itemHorizontalMargin = 0;
const entryBorderRadius = 0;

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: 'hsl(15, 55%, 50%)',
    background2: 'hsl(230, 30%, 45%)'
};

const styles = StyleSheet.create({
	    slideInnerContainer: {
	        width: itemWidth,
	        height: slideHeight,
	        paddingHorizontal: itemHorizontalMargin,
	        paddingBottom: 0, // needed for shadow
			marginTop: 12,
	    },
	    imageContainer: {
	        flex: 0,
	        backgroundColor: 'white',
	        borderTopLeftRadius: entryBorderRadius,
	        borderTopRightRadius: entryBorderRadius,
	    },
	    imageContainerEven: {
	        backgroundColor: colors.black
	    },
	    image: {
	        resizeMode: 'cover',
	        borderRadius: entryBorderRadius,
	        borderTopLeftRadius: entryBorderRadius,
	        borderTopRightRadius: entryBorderRadius,
			width: itemWidth,
	  	  	height: itemHeight,
	    },
	    // image's border radius is buggy on ios; let's hack it!
	    radiusMask: {
	        position: 'absolute',
	        bottom: 0,
	        left: 0,
	        right: 0,
	        height: entryBorderRadius,
	        backgroundColor: 'white'
	    },
	    radiusMaskEven: {
	        backgroundColor: colors.black
	    },
	    textContainer: {
			flex: 0,
	        paddingTop: 20 - entryBorderRadius,
	        paddingBottom: 120,
			bottom: 20,
	        paddingHorizontal: 16,
	        backgroundColor: 'rgba(0, 0, 0, 0.5)',
	        borderBottomLeftRadius: entryBorderRadius,
	        borderBottomRightRadius: entryBorderRadius,
			marginTop: slideHeight - 160
	    },
	    textContainerEven: {
	        backgroundColor: colors.black
	    },
	    title: {
	        color: 'white',
	        fontSize: 30,
	        fontWeight: 'bold',
	        letterSpacing: 0.5
	    },
	    titleEven: {
	        color: 'white'
	    },
	    subtitle: {
	        marginTop: 0,
	        color: '#BBBBBB',
	        fontSize: 20,
	        fontStyle: 'italic'
	    },
	    subtitleEven: {
	        color: 'rgba(255, 255, 255, 0.7)'
	    },
});
