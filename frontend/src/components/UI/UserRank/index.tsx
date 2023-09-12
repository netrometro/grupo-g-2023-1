import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalEmail } from "../../../pages/GlobalVariables";

interface UserRankProps {
  position: number;
  userName: string;
  co2Amount: number;
}
interface PositionObject {
  [key: number]: string;
}

const UserRank = ({ position, userName, co2Amount }: UserRankProps) => {
  const checkIsUser = () => {
    return userName === globalEmail;
  };
  const positionObject: PositionObject = {
    1: "purple",
    2: "blue",
    3: "red",
  };
  const containerBackgroundColor = checkIsUser() ? "#5A875D" : "#C8E6C9";
  const positionColor = positionObject[position];

  return (
    <View
      style={[styles.container, { backgroundColor: containerBackgroundColor }]}
    >
      <Text style={styles.positionNumber}>{position}</Text>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.useName}>{userName}</Text>
        <Text style={styles.co2Counter}>{co2Amount} kgCO2/Mês</Text>
      </View>
    </View>
  );
};

export default UserRank;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  line: {
    height: "100%",
    width: 1,
    backgroundColor: "black",
  },
  positionNumber: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1D3623",
    marginRight: 5,
    height: 40,
    width: 25,
  },
  useName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3623",
    marginLeft: 20,
  },
  co2Counter: {
    fontSize: 15,
    color: "#1D3623",
    marginLeft: 20,
  },
});
