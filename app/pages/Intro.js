import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Alert,
	Image, Dimensions
} from 'react-native';
import AppIntro from 'react-native-app-intro';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const win = Dimensions.get("window");
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
		width: 200,
		height: 200,
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
	}
});


export default class Intro extends Component {
	
	static navigationOptions = {
		title: 'Welcome',
		header: null
	};
	
	onSkipBtnHandle = (index) => {
		this.props.navigation.navigate('Difficulty');
	}
	doneBtnHandle = () => {
		this.props.navigation.navigate('Difficulty');
	}
	render(){
		
		return (
			<AppIntro
				onNextBtnClick={this.nextBtnHandle}
				onDoneBtnClick={this.doneBtnHandle}
				onSkipBtnClick={this.onSkipBtnHandle}
				onSlideChange={this.onSlideChangeHandle}
				doneBtnLabel='Baigti'
				skipBtnLabel='Praleisti'
				customStyles={{ controllText: { fontSize: responsiveFontSize(1.5) } }}
			>
			<View style={[styles.slide,{ backgroundColor: '#880e4f' }]}>
				<Image style={styles.image} source={require('../images/happy2.png')} />
				<View level={10}><Text style={styles.name}>Sveikiname!</Text></View>
				<View level={10}><Text style={styles.text}>Jūs žengėte pirmą žingsnį tobulėjimo link. Šis trumpas gidas supažindins Jus su šia programėle.</Text></View>
			</View>
			<View style={[styles.slide, { backgroundColor: '#1B5E20' }]}>
				<Image style={styles.image} source={require('../images/books.png')} />
				<View level={10}><Text style={styles.name}>Pritaikyta kiekvienam</Text></View>
				<View level={10}><Text style={styles.text}>Nuo pradinuko iki pažengusio, mes esame pasirengę Jums padėti. Po šio gido galėsite pasirinkti savo anglų kalbos žinių lygį.</Text></View>
			</View>
			<View style={[styles.slide,{ backgroundColor: '#304ffe' }]}>
				<Image style={styles.image} source={require('../images/lesson.png')} />
				<View level={10}><Text style={styles.name}>Įdomios pamokos</Text></View>
				<View level={10}><Text style={styles.text}>Pamokos yra suskirstytos pagal temas, todėl neatrodys, kad mokinatės nereikšmingus žodžius.</Text></View>
			</View>
			<View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
				<Image style={styles.image} source={require('../images/trophy.png')} />
				<View level={10}><Text style={styles.name}>Linkime sėkmės</Text></View>
				<View level={10}><Text style={styles.text}>Nepraraskite motyvacijos prisijungdami kiekvieną dieną.</Text></View>
			</View>
			</AppIntro>
		);
	}
}
