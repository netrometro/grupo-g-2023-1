import { FlatList, StyleSheet, Text, View } from "react-native";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import InfopType from "../../components/UI/InfopType";
import FunctionsButton from "../../components/AdminButton/FuntionsButton";
import { useEffect, useState } from "react";
import axios from "axios";

interface InfopTypeData {
  id: string;
  title: string;
  text: string;
  onPress: () => void;
}

const TransportHints = ({ navigation }: AuthScreenProps) => {
  const [data, setData] = useState<InfopTypeData[]>([]);
  const [selectedInfopType, setSelectedInfopType] = useState<InfopTypeData | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoaware-cm57.onrender.com/getInfop/:infopostId"
        );
        setData(response.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          text: item.text,
        })));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleInfopTypeClick = (infopType: InfopTypeData) => {
    setSelectedInfopType(infopType);
  };

  return (
    <View style={styles.container}>
      <FunctionsButton />
      <Text style={styles.title}>Transporte</Text>
      <InfopType title={'Use meios de transportes compartilhados'} text={"A otimização de rotas pode ajudar a reduzir o tempo de viagem e a distância percorrida pelos caminhões. Como reflexo disso, é possível minimizar o consumo de combustível e, consequentemente, as emissões derivadas da sua queima. Atualmente, a tecnologia é uma das maiores aliadas das empresas quando o assunto é otimização de rotas. Isso porque, com o auxílio de softwares específicos, é possível identificar o caminho mais eficiente para cada entrega."} />
      {selectedInfopType ? (
        <InfopType title={selectedInfopType.title} text={selectedInfopType.text} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InfopType
              title={item.title}
              text={item.text}
            />
          )}
          scrollEnabled={true}
        />
      )}
      <Navbar navigation={navigation} />
    </View>
  );
};

export default TransportHints;

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
