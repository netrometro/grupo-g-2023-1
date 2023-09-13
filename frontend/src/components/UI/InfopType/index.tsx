import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface InfopTypeProps {
    id: string;
    title: String;
    text: String;
    onPress: () => void;
}

const InfopType = ({ id, title, text, onPress }: InfopTypeProps) => {

//"#C8E6C9"

    return (
      <View style={[styles.container]}>
        <TouchableOpacity  onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default InfopType;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 380,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C8E6C9",
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3623",
    marginLeft: 20,
  },
  text: {
    fontSize: 15,
    color: "#1D3623",
    marginLeft: 20,
  },
});
