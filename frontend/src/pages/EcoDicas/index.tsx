import { Text, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import { GlobeHemisphereWest } from "phosphor-react-native";
import { DivisionLine } from "../../components/UI/DivisionLine";

const EcoDicas = ({ navigation }: AuthScreenProps) => {
  const iconSize = 150;

  return (
    <View style={styles.container}>
      <View style={styles.userProfileContainer}>
        <GlobeHemisphereWest size={iconSize} color="#C8E6C9" />
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.userNameText}>UserProfile</Text>
      </View>
      <DivisionLine />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome:</Text>
        <Text style={styles.infoText}>idade:</Text>
        <Text style={styles.infoText}>Senha:</Text>
        <Text style={styles.infoText}>Comida favorita:</Text>
        <Text style={styles.infoText}>Infos:</Text>
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default EcoDicas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
    alignItems: "center",
  },
  userProfileContainer: {
    marginTop: 30,
    padding: 15,
  },
  userNameText: {
    fontSize: 16,
    color: "#1D3623",
  },
  userNameContainer: {
    width: 150,
    alignItems: "center",
    backgroundColor: "#C8E6C9",
    padding: 5,
    borderRadius: 15,
  },
  infoText: {
    fontSize: 15,
    color: "#C8E6C9",
    marginVertical: 10,
  },
  infoContainer: {
    alignItems: "flex-start",
    width: "80%",
    paddingLeft: 15,
  },
});
