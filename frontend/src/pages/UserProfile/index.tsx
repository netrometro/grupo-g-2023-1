import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import { UserCircle } from "phosphor-react-native";
import { DivisionLine } from "../../components/UI/DivisionLine";
import { globalEmail } from "../GlobalVariables";
import { useEffect, useState } from "react";
import axios from "axios";
const UserProfile = ({ navigation }: AuthScreenProps) => {
  const iconSize = 150;
  const [userDeleted, setUserDeleted] = useState(false);
  const deleteAccount = () => {
    axios
      .post("https://ecoaware-cm57.onrender.com/deleteUser", {
        email: globalEmail,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          console.log(globalEmail);
          navigation.navigate("AuthScreen");
          setUserDeleted(true);
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        console.log(globalEmail);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.userProfileContainer}>
        <UserCircle size={iconSize} color="#C8E6C9" />
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.userNameText}>UserProfile</Text>
      </View>
      <DivisionLine />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: {globalEmail}</Text>
        <Text style={styles.infoText}>idade:</Text>
        <Text style={styles.infoText}>Senha:</Text>
        <Text style={styles.infoText}>Comida favorita:</Text>
        <Text style={styles.infoText}>Infos:</Text>
      </View>
      <View style={styles.centerView}>
        <TouchableOpacity style={styles.deleteButton} onPress={deleteAccount}>
          <Text style={styles.infoText}>Deletar Usuario</Text>
        </TouchableOpacity>
        {userDeleted ? (
          <Text style={styles.infoText}>Usuario deletado com sucesso</Text>
        ) : (
          <></>
        )}
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default UserProfile;

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
  centerView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 15,
  },
});
