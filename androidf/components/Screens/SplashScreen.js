import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import DocImg from "../Images/doctor.jpg";

const SplashScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={DocImg} />
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text1}>To Hospital</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  logo: {
    height: "30%",
    width: "100%",
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 40,
    marginTop: "50%",
  },
  text1: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
});
