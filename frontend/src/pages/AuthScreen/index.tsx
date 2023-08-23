import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { AuthScreenProps } from "../../types/PagesTypeList";
import axios from "axios";
export function AuthScreen({ navigation }: AuthScreenProps) {
  const [email, setEmail] = useState<string>("" as string);
  const [password, setPassword] = useState<string>("" as string);
  const [error, setError] = useState<boolean>(false as boolean);
  const handleEmailPassword = () => {
    axios
      .post("https://ecoaware-cm57.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data === "Logado") {
          navigation.navigate("Home");
        } else {
          setError(true);
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Request failed:", error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: -350,
      })}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/ecoeco.png")}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#5A875D"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#5A875D"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            handleEmailPassword();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {error ? (
          <Text style={styles.warningText}>Senha ou usuário incorreto</Text>
        ) : (
          <></>
        )}
        <TouchableOpacity
          onPress={() => {
            handleEmailPassword();
          }}
          style={styles.button}
        >
          <Text style={[styles.buttonText]}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#C8E6C9",
    height: 60,
    width: 300,
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  inputContainer: {},
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    height: 50,
    width: 250,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5A875D",
    marginVertical: 5,
  },

  buttonText: {
    color: "#C8E6C9",
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  warningText: {
    color: "#C8E6C9",
    fontSize: 15,
    fontWeight: "bold",
  },
});
