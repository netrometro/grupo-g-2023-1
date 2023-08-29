import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";

const Gifts = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>EcoHints</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Gifts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
  },
});
