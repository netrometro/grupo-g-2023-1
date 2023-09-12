import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface InfopTypeProps {
    title: String;
    text: String;
}

const InfopType = ({ title, text }: InfopTypeProps) => {

//"#C8E6C9"
  return (
    <View style={[styles.container, { backgroundColor: "#5A875D" }]}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text} miaaauuuuu</Text>
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
