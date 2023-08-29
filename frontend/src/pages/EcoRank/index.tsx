import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import UserRank from "../../components/UI/UserRank";
import axios from "axios";
interface UserData {
  email: string;
  co2Produced: number;
}
const EcoRank = ({ navigation }: AuthScreenProps) => {
  const [data, setData] = useState<UserData[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ecoaware-cm57.onrender.com/getUsersByCo2"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>EcoRank</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <UserRank
              position={index + 1}
              userName={item.email}
              co2Amount={item.co2Produced}
            />
          )}
        />
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};

export default EcoRank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3623",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "#1D3623",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#C8E6C9",
    fontSize: 35,
    fontWeight: "600",
  },
  flatListContainer: {
    backgroundColor: "#1D3623",
    flex: 1,
    alignItems: "center",
  },
});
