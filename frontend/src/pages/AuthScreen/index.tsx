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
import { Eye, EyeClosed } from "phosphor-react-native";
export function AuthScreen({ navigation }: AuthScreenProps) {
  const [email, setEmail] = useState<string>("" as string);
  const [password, setPassword] = useState<string>("" as string);
  const [error, setError] = useState<boolean>(false as boolean);
  const [errorMessage, setErrorMessage] = useState<string>("" as string);
  const [showPassword, setShowPassword] = useState(false);
  const handleEmailPassword = () => {
    axios
      .post("https://ecoaware-cm57.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Home");
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setError(true);
      });
  };
  const createAccount = () => {
    axios
      .post("https://ecoaware-cm57.onrender.com/register", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setError(true);
          setErrorMessage("Conta criada com sucesso");
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.response.data.error);
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

        <View style={styles.passwordInput}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#5A875D"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.passwordInputField}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.passwordToggleIcon}
          >
            {showPassword ? (
              <Eye size={30} color="#5A875D" />
            ) : (
              <EyeClosed size={30} color="#5A875D" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.errorContainer}>
        {error ? <Text style={styles.warningText}>{errorMessage}</Text> : <></>}
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
        <TouchableOpacity
          onPress={() => {
            createAccount();
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
  buttonContainer: {},
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
    textAlign: "center",
  },
  errorContainer: {
    alignItems: "center",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C8E6C9",
    height: 60,
    width: 300,
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  passwordInputField: {
    flex: 1,
    paddingRight: 20,
  },
  passwordToggleIcon: {
    position: "absolute",
    right: 10,
  },
});
