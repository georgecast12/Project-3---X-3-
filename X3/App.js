import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<WelcomeScreen />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00FFFF",
	},
	welcome: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});
