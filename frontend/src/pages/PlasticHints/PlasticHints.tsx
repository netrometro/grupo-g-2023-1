import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";

const PlasticHints = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plástico</Text> 
      <Navbar navigation={navigation} />
    </View>
  );
};

export default PlasticHints;

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
