import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../Navbar";
import { AuthScreenProps } from "../../types/PagesTypeList";
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface Category {
  categoria: String;
}

const CategoryCard = ({navigation}: AuthScreenProps) => {
  const [category, setCategory] = useState<Category[]>([]);

 

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.get(`/getDica`);

        setCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategory();
  }, []);

  function ecoDicasScreen(){
    navigation.navigate("EcoDicas")
  }

  return (
    <View style={stylesCategoryCard.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            ecoDicasScreen();
          }}
        />
      </ScrollView>
     <Navbar navigation={navigation} />
    </View>
  );
};


export default CategoryCard;

const stylesCategoryCard = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#1D3623",
  },
  iconsView: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    justifyContent: 'center'
  },
});