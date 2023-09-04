import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";

const Home = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity
        style={styles.calcBtn}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Text style={styles.calcBtnText}>Calculadora CO2</Text>
      </TouchableOpacity>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
  },
  title: {
    color: "#C8E6C9",
    fontSize: 35,
    marginTop: 40,
    marginLeft: 25,
    fontWeight: "600",
  },
  calcBtn: {
    backgroundColor: "#5A875D",
    width: 150,
    height: 45,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 25,
  },
  calcBtnText: {
    color: "#C8E6C9",
    fontSize: 16,
    fontWeight: "600",
  },
});
