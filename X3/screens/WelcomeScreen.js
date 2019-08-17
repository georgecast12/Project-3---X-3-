import React from "react";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
} from "react-native";

export default function WelcomeScreen() {
	return (
		<ImageBackground
			source={require("../assets/images/sailboat.jpeg")}
			style={{ width: "100%", height: "100%" }}
		>
			<Text style={styles.welcomeText}>X-3OATS</Text>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	welcomeText: {
		marginBottom: 20,
		marginTop: 175,
		color: "#DAA520",
		fontSize: 75,
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "monospace",
		opacity: 0.8,
	},
});
