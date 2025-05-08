import { View, Text, StyleSheet, Alert, Button } from "react-native"

export default function Index() {

	function handleMessage() {
		let s: string = "Jonatas";
		Alert.alert(`Olá ${s}!!`)
		alert(`Olá ${s}!!`)
		console.log("Log terminal")
		
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title} className="title" >Primeiro teste para aplicação</Text>

			<Button title="Enviar" onPress={handleMessage} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		color: "red",
		fontWeight: "bold"
	}
})