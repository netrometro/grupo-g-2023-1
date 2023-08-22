import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";

const EcoInfo = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>EcoInfo</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default EcoInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
  },
});