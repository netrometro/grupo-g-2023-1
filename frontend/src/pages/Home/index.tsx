import * as React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";

function Home({ navigation }: AuthScreenProps) {
  return (
    <View style={styles.container}>
      <View></View>
      <ScrollView></ScrollView>
      {/* <FlatList></FlatList> */}
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
    justifyContent: "center",
    alignItems: "center",
  },
});
