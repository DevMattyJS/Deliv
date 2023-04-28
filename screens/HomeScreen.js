import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import InputField from "../components/ui/InputField";
import FlatButton from "../components/ui/FlatButton";
import GhostButton from "../components/ui/GhostButton";

function HomeScreen() {
  return (
    <View style={styles.root}>
      <StatusBar />
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.innerContainer}>
          <View style={styles.logo}>
            <Text style={styles.title}>Deliv</Text>
          </View>
          <View style={styles.actions}>
            <InputField hint="Enter your location" />
            <PrimaryButton>Show Restaurants</PrimaryButton>
            <View style={styles.divider}>
              <View style={styles.dividerLine}></View>
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine}></View>
            </View>
          </View>
          <FlatButton>Skip this step</FlatButton>
        </View>
        <View style={styles.bottomContainer}>
          <GhostButton>Create an account or login</GhostButton>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    marginTop: 150,
    marginBottom: 44,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: 35,
    color: "white",
  },
  actions: {
    marginBottom: 25,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  dividerLine: {
    height: 1,
    backgroundColor: "white",
    flex: 1,
  },
  dividerText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "900",
    color: "white",
    width: 25,
  },
  bottomContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});
