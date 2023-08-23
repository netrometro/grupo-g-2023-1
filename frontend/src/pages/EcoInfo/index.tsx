import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps, LockScreenParamList } from "../../types/PagesTypeList";
import CategoryCard from "../../components/CategoryCard";
import { Drop } from "phosphor-react-native";


const EcoInfo = ({ navigation }: AuthScreenProps) => {



  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoInfo</Text>
        <CategoryCard navigation={{
        navigate: function (screen: keyof LockScreenParamList): void {
          throw new Error("Function not implemented.");
        }
      }}/>
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
  title: {
    color: "#C8E6C9",
    fontSize: 35,
    marginTop: 40,
    marginLeft: 25,
    fontWeight: "600",
  },
});
