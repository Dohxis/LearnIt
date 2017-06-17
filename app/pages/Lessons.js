import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity, Button
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class Lessons extends Component {

	static navigationOptions = {
		title: 'Welcome',
		header: null
	};

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
				onPress={() => { alert(`You've clicked`); }}
				>
					<View>
						<View style={styles.imageContainer}>
						<Image
						source={require('../components/img/two.png')}
						style={styles.image}
						/>
						<View style={styles.radiusMask} />
						</View>
						<View style={styles.textContainer}>
						<Text style={styles.title}> HELLO </Text>
						<Text style={styles.subtitle} numberOfLines={2}>This is a thing</Text>
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
						source={require('../components/img/two.png')}
						style={styles.image}
						/>
						<View style={styles.radiusMask} />
						</View>
						<View style={styles.textContainer}>
						<Text style={styles.title}> HELLO </Text>
						<Text style={styles.subtitle} numberOfLines={2}>This is a thing</Text>
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
						source={require('../components/img/two.png')}
						style={styles.image}
						/>
						<View style={styles.radiusMask} />
						</View>
						<View style={styles.textContainer}>
						<Text style={styles.title}> HELLO </Text>
						<Text style={styles.subtitle} numberOfLines={2}>This is a thing</Text>
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
						source={require('../components/img/two.png')}
						style={styles.image}
						/>
						<View style={styles.radiusMask} />
						</View>
						<View style={styles.textContainer}>
						<Text style={styles.title}> HELLO </Text>
						<Text style={styles.subtitle} numberOfLines={2}>This is a thing</Text>
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
						source={require('../components/img/two.png')}
						style={styles.image}
						/>
						<View style={styles.radiusMask} />
						</View>
						<View style={styles.textContainer}>
						<Text style={styles.title}> HELLO </Text>
						<Text style={styles.subtitle} numberOfLines={2}>This is a thing</Text>
						</View>
					</View>
				</TouchableOpacity>
			</Carousel>
			<Button 
			color={"#1a237e"}
			title={"Guest (0 / 6)"}
			onPress={() => { navigate('User') }} />
			</View>
       );
   }
}

const horizontalMargin = 20;
const slideWidth = 280;

function wp (percentage) {
    const value = (percentage * Dimensions.get('window').width) / 100;
    return Math.round(value);
}

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth;
const itemHeight = 200;
const slideHeight = 400;
const win = Dimensions.get('window');
const itemHorizontalMargin = wp(2);
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
	        height: 500,
	        paddingHorizontal: itemHorizontalMargin,
	        paddingBottom: 0, // needed for shadow
			marginTop: 10
	    },
	    imageContainer: {
	        flex: 0,
	        backgroundColor: 'white',
	        borderTopLeftRadius: entryBorderRadius,
	        borderTopRightRadius: entryBorderRadius
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
	  	  	height: 500,
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
	        justifyContent: 'center',
	        paddingTop: 20 - entryBorderRadius,
	        paddingBottom: 20,
	        paddingHorizontal: 16,
	        backgroundColor: 'rgba(0, 0, 0, 0.5)',
	        borderBottomLeftRadius: entryBorderRadius,
	        borderBottomRightRadius: entryBorderRadius,
			marginTop: 400
	    },
	    textContainerEven: {
	        backgroundColor: colors.black
	    },
	    title: {
	        color: 'white',
	        fontSize: 20,
	        fontWeight: 'bold',
	        letterSpacing: 0.5
	    },
	    titleEven: {
	        color: 'white'
	    },
	    subtitle: {
	        marginTop: 0,
	        color: colors.gray,
	        fontSize: 12,
	        fontStyle: 'italic'
	    },
	    subtitleEven: {
	        color: 'rgba(255, 255, 255, 0.7)'
	    }
});
