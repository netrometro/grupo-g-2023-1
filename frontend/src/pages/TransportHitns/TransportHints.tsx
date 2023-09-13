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
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InfopType
              id={item.id}
              title={item.title}
              text={item.text}
              onPress={() => handleInfopTypeClick(item)}
            />
          )}
          scrollEnabled={true}
        />
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
  flatListContainer: {
    backgroundColor: "#1D3623",
    height: "77%",
    alignItems: "center",
  },
});
