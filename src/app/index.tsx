import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

	const [name, setName] = useState<string>("Usuário");

	function handleNext() {
		router.navigate("/dashboard")
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Olá, {name}</Text>

			<Input onChangeText={setName} />

			<Button title="Continuar" onPress={handleNext} />

		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
	},
	title: {
		fontWeight: "bold"
	}
});
