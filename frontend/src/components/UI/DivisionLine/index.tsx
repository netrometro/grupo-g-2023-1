import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { User, Eye, Question, PlusCircle } from "phosphor-react-native";
export function DivisionLine() {
  return <View style={styles.divisionContainer} />;
}

const styles = StyleSheet.create({
  divisionContainer: {
    height: 2,
    width: "80%",
    backgroundColor: "#C8E6C9",
    marginTop: 15,
    marginBottom: 5,
  },
});
