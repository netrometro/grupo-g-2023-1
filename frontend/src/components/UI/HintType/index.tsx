import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";

interface HintTypeProps {
    ecohints: string;
    icone: ReactNode;
    cor: string;
    onPress?: () => void;
  }
  

const HintType = ({ecohints, icone, cor, onPress}: HintTypeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={[styles.button , {borderColor: cor}]}
      onPress={onPress}>
        {icone}
        <Text style={styles.buttonText}>{ecohints}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HintType;

const styles = StyleSheet.create({
  container: {
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
    marginTop: 20,
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
