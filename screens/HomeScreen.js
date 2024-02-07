import { Text, View, Image, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/step1.png")}
      />
      <Text style={styles.text}>Welcome to Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    color: Colors.primary800,
    fontSize: 30,
    fontWeight: "700",
  },
});
