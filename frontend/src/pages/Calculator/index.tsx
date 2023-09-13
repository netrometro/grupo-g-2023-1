import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import CheckBox from "expo-checkbox";
import React from "react";
import { TouchableOpacity } from "react-native";
import { globalEmail } from "../GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import axios from "axios";
import { AuthScreenProps } from "../../types/PagesTypeList";
interface carFueldObjectInterface {
  [key: string]: number;
}
interface userDietInterface {
  [key: string]: number;
}
interface RequestBody {
  email: string;
}

const Calculator = ({ navigation }: AuthScreenProps) => {
  const [eletricityAmount, setEletricityAmount] = React.useState(150);
  const [hasCar, setHasCar] = React.useState(false);
  const [carKm, setCarKm] = React.useState<number>(0);
  const [carFuel, setCarFuel] = React.useState<string>("gasolina");
  const [carEfficiency, setCarEfficiency] = React.useState<number>(1);
  const [publicTransportKm, setPublicTransportKm] = React.useState<number>(0);
  const [userDiet, setUserDiet] = React.useState<string>("");
  const [cellphoneHours, setCellphoneHours] = React.useState<number>(0);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [userEmail, setUserEmail] = React.useState<string>("");
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
  const carFuelObject: carFueldObjectInterface = {
    gasolina: 2.3,
    diesel: 2.7,
    alcool: 1.6,
  };
  const userDietObj: userDietInterface = {
    vegano: 1.5,
    vegetariano: 1.7,
    onivoro: 2.5,
  };
  const handleDietDiff = () => {
    if (userDiet === "vegetariano") {
      return Number(24);
    } else if (userDiet === "vegano") {
      return Number(30);
    } else {
      return 0;
    }
  };
  const consumption = (amount: number, variable: number) => {
    return amount * variable;
  };
  const fuelConsuption = (km: number, efficiency: number) => {
    return ((km / efficiency) * carFuelConsumption).toFixed();
  };
  const carFuelConsumption = carFuelObject[carFuel];
  const userDietValue = userDietObj[userDiet];
  const co2FromEletricity = consumption(eletricityAmount, 0.23);
  const co2FromCar = Number(fuelConsuption(carKm, carEfficiency));
  const co2SavedFromPublicTransport = publicTransportKm * 0.67;
  const co2FromCellphone = (cellphoneHours * 5 * 30) / 1000;
  const co2SavedFromDiet: number = handleDietDiff() || 0;

  const calculateResult = () => {
    return co2FromEletricity + co2FromCar + co2FromCellphone;
  };
  const calculateSavedCo2 = () => {
    return co2SavedFromPublicTransport + co2SavedFromDiet;
  };
  const co2Value: number = calculateResult();

  const requestData = {
    email: userEmail,
    co2: 2,
  };
  const updateCo2 = () => {
    axios
      .put("https://ecoaware-cm57.onrender.com/updateUserCo2", {
        email: userEmail,
        co2Emit: co2Value,
      } as RequestBody)
      .then((response) => {})
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>
            Calculadora de emissão de carbono mensal
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.questionText}>
            Qual é o consumo de eletricidade na sua casa por mês? (em kWh)
          </Text>
          <Slider
            style={{ width: 300, height: 40, shadowColor: "#000" }}
            minimumValue={1}
            maximumValue={1000}
            minimumTrackTintColor="#C8E6C9"
            maximumTrackTintColor="#1D3623"
            onSlidingComplete={(value) => setEletricityAmount(value)}
            value={eletricityAmount}
          />
          <Text style={styles.valueText}>
            {eletricityAmount.toFixed()} kWh/Mês
          </Text>
          <Text style={styles.valueText}>
            {consumption(eletricityAmount, 0.23).toFixed(2)}kgCO2/Mês
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.questionText}>Você possui um carro?</Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.noContainer}>
              <Text style={styles.questionText}>Não</Text>
              <CheckBox
                disabled={false}
                value={!hasCar}
                onValueChange={() => {
                  setHasCar(false);
                  setCarKm(0);
                }}
                style={{ borderColor: "#C8E6C9", marginTop: 10 }}
              />
            </View>
            <View style={styles.noContainer}>
              <Text style={styles.questionText}>Sim</Text>
              <CheckBox
                disabled={false}
                value={hasCar}
                onValueChange={() => setHasCar(true)}
                style={{ borderColor: "#C8E6C9", marginTop: 10 }}
              />
            </View>
          </View>
        </View>

        {hasCar ? (
          <>
            <View style={styles.sliderContainer}>
              <Text style={styles.questionText}>
                Qual é o tipo de combustivel do seu carro
              </Text>
              <View style={styles.checkBoxContainer}>
                <View style={styles.noContainer}>
                  <Text style={styles.questionText}>Gasolina</Text>
                  <CheckBox
                    disabled={false}
                    value={carFuel === "gasolina"}
                    onValueChange={() => {
                      setCarFuel("gasolina");
                    }}
                    style={{ borderColor: "#C8E6C9", marginTop: 10 }}
                  />
                </View>
                <View style={styles.noContainer}>
                  <Text style={styles.questionText}>Diesel</Text>
                  <CheckBox
                    disabled={false}
                    value={carFuel === "diesel"}
                    onValueChange={() => {
                      setCarFuel("diesel");
                    }}
                    style={{ borderColor: "#C8E6C9", marginTop: 10 }}
                  />
                </View>
                <View style={styles.noContainer}>
                  <Text style={styles.questionText}>Álcool</Text>
                  <CheckBox
                    disabled={false}
                    value={carFuel === "alcool"}
                    onValueChange={() => {
                      setCarFuel("alcool");
                    }}
                    style={{ borderColor: "#C8E6C9", marginTop: 10 }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.sliderContainer}>
              <Text style={styles.questionText}>
                Quantos km você dirige por mês?
              </Text>
              <Slider
                style={{ width: 300, height: 40, shadowColor: "#000" }}
                minimumValue={1}
                maximumValue={800}
                minimumTrackTintColor="#C8E6C9"
                maximumTrackTintColor="#1D3623"
                onSlidingComplete={(value) => setCarKm(value)}
                value={carKm}
              />
              {<Text style={styles.valueText}>{carKm.toFixed(2)} km/Mês</Text>}
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.questionText}>
                Qual é a eficiencia do seu carro? (km/L)
              </Text>
              <Slider
                style={{ width: 300, height: 40, shadowColor: "#000" }}
                minimumValue={0.5}
                maximumValue={50}
                minimumTrackTintColor="#C8E6C9"
                maximumTrackTintColor="#1D3623"
                onSlidingComplete={(value) => setCarEfficiency(value)}
                value={carEfficiency}
              />

              <Text style={styles.valueText}>
                {carEfficiency.toFixed()} km/L
              </Text>

              <Text style={styles.valueText}>
                {fuelConsuption(carKm, carEfficiency)} kgCO2/Mês
              </Text>
            </View>
          </>
        ) : (
          <Text></Text>
        )}
        <View style={styles.sliderContainer}>
          <Text style={styles.questionText}>
            Quantos km você viaja de transporte público por mês?
          </Text>
          <Slider
            style={{ width: 300, height: 40, shadowColor: "#000" }}
            minimumValue={1}
            maximumValue={800}
            minimumTrackTintColor="#C8E6C9"
            maximumTrackTintColor="#1D3623"
            onSlidingComplete={(value) => setPublicTransportKm(value)}
            value={publicTransportKm}
          />

          <Text style={styles.valueText}>
            {publicTransportKm.toFixed()} km/Mês
          </Text>
          <Text style={styles.valueText}>
            Você deixou de produzir {(publicTransportKm * 0.67).toFixed(2)} kg
            de CO2 nesse mês
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.questionText}>
            Qual regime alimentar você segue?
          </Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.noContainer}>
              <Text style={styles.questionText}>Vegetariano</Text>
              <CheckBox
                disabled={false}
                value={userDiet === "vegetariano"}
                onValueChange={() => {
                  setUserDiet("vegetariano");
                }}
                style={{ borderColor: "#C8E6C9", marginTop: 10 }}
              />
            </View>
            <View style={styles.noContainer}>
              <Text style={styles.questionText}>Vegano</Text>
              <CheckBox
                disabled={false}
                value={userDiet === "vegano"}
                onValueChange={() => {
                  setUserDiet("vegano");
                }}
                style={{ borderColor: "#C8E6C9", marginTop: 10 }}
              />
            </View>
            <View style={styles.noContainer}>
              <Text style={styles.questionText}>Onivoro</Text>
              <CheckBox
                disabled={false}
                value={userDiet === "onivoro"}
                onValueChange={() => {
                  setUserDiet("onivoro");
                }}
                style={{ borderColor: "#C8E6C9", marginTop: 10 }}
              />
            </View>
          </View>
          {userDiet === "vegetariano" || userDiet === "vegano" ? (
            <Text style={styles.valueText}>
              Você deixou de produzir {handleDietDiff()} kg de CO2 nesse mês
            </Text>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.questionText}>
            Por quantas horas você utiliza o celular por dia?
          </Text>
          <Slider
            style={{ width: 300, height: 40, shadowColor: "#000" }}
            minimumValue={1}
            maximumValue={24}
            minimumTrackTintColor="#C8E6C9"
            maximumTrackTintColor="#1D3623"
            onSlidingComplete={(value) => setCellphoneHours(value)}
            value={cellphoneHours}
          />

          <Text style={styles.valueText}>
            {cellphoneHours.toFixed()} horas/dia
          </Text>
          <Text style={styles.valueText}>
            {((cellphoneHours * 5 * 30) / 1000).toFixed(2)} kg de CO2/Mês
          </Text>
        </View>
        {showResult && (
          <>
            <View style={styles.resultContainer}>
              <Text style={styles.questionText}>
                Você produziu {calculateResult().toFixed(2)} kgCO2 nesse mês
              </Text>
            </View>
            <View style={styles.resultContainer}>
              <Text style={styles.questionText}>
                {calculateSavedCo2().toFixed(2)} kg de CO2 foram evitados nesse
                mês
              </Text>
            </View>
            <View style={styles.resultContainer}>
              <Text style={styles.questionText}>
                Resultado calculado com sucesso, você será redirecionado para
                verificar sua colocação no ranking
              </Text>
            </View>
          </>
        )}
        {!showResult && (
          <TouchableOpacity
            style={styles.calculatorBtn}
            onPress={() => {
              updateCo2();
              setShowResult(true);
              setTimeout(() => {
                setShowResult(false);
                navigation.navigate("EcoRank");
              }, 8000);
            }}
          >
            <Text style={styles.infoText}>Calcular resultado</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
  },
  itemsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    color: "#C8E6C9",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    color: "#C8E6C9",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
  questionText: {
    color: "#C8E6C9",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#5A875D",
    width: "85%",
    borderRadius: 15,
    padding: 15,
  },
  checkbox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  checkBoxContainer: {
    flex: 1,
    height: 30,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 30,
  },
  noContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  calculatorBtn: {
    backgroundColor: "#5A875D",
    width: 250,
    height: 60,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  resultContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5A875D",
    width: "85%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
  },
});
