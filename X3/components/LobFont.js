import React from "react";
import { Text } from "react-native";

export function LobsterFont(props) {
	return <Text {...props} style={[props.style, { fontFamily: "lobster" }]} />;
}
