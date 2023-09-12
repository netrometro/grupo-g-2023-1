import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import axios from "axios";
import { Person, ForkKnife, Bicycle, Bag  } from "phosphor-react-native";
import HintType from "../../components/UI/HintType";

interface EcoCateg{
  name: String;
}


const EcoHints = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoHints</Text> 
      <HintType ecohints={'TRANSPORTE'} icone={<Bicycle size={45} color="blue" />} cor={'blue'} />
      <HintType ecohints={'Alimentação'} icone={<ForkKnife size={45} color="yellow" />} cor={'yellow'} />
      <HintType ecohints={'Atividades'} icone={<Person size={45} color="green" />} cor={'green'} />
      <HintType ecohints = {"Plástico"} icone={<Bag size={45} color="red" />} cor={"red"}  />
      <Navbar navigation={navigation} />
    </View>
  );
};

export default EcoHints;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#1D3623",
  },
  title: {
    color: "#C8E6C9",
    fontSize: 35,
    marginTop: 40,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#C8E6C9",
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});
