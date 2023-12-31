import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import { UserCircle } from "phosphor-react-native";
import { DivisionLine } from "../../components/UI/DivisionLine";
import { useEffect, useState } from "react";
import axios from "axios";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserProfile = ({ navigation }: AuthScreenProps) => {
  const iconSize = 150;
  const [userEmail, setUserEmail] = useState("");
  const handleLogout = () => {
    deleteData();
    navigation.navigate("AuthScreen");
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const info = await AsyncStorage.getItem("appData");
      if (info) {
        const parsedData = JSON.parse(info);
        const email = parsedData.email;
        setUserEmail(email);
        return email;
      } else return null;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem("appData");
    } catch (error) {
      console.log(error);
    }
  };

  async function handleDeleteAuthentication() {
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Confirme sua digital",
    });
    if (auth.success) {
      deleteAccount();
    } else {
      return null;
    }
  }
  const deleteAccount = () => {
    axios
      .post("https://ecoaware-cm57.onrender.com/deleteUser", {
        email: getData(),
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          console.log(userEmail);
          navigation.navigate("AuthScreen");
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        console.log(userEmail);
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
        <Text style={styles.infoText}>Email: {userEmail}</Text>
        <Text style={styles.infoText}>idade:</Text>
        <Text style={styles.infoText}>Senha:</Text>
        <Text style={styles.infoText}>Comida favorita:</Text>
        <Text style={styles.infoText}>Infos:</Text>
      </View>
      <View style={styles.centerView}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAuthentication}
        >
          <Text style={styles.infoText}>Deletar Usuario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleLogout}>
          <Text style={styles.infoText}>Sair </Text>
        </TouchableOpacity>
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
    marginTop: 10,
  },
});
