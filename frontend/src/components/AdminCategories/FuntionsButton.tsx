import axios from 'axios';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FunctionsButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const createInfop = async () => {
    try {
      const response = await axios.post(
        "https://ecoaware-cm57.onrender.com/createInfop/:email"
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const editInfop = async () => {
    try {
      const response = await axios.put(
        "https://ecoaware-cm57.onrender.com/updateInfop/:email/:infopostId"
        );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const deleteInfop = async () => {
    try {
      const response = await axios.delete(
        "https://ecoaware-cm57.onrender.com/deleteInfop/:email/:infopostId"
        );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mainButton} onPress={toggleOptions}>
        <Text style={styles.mainButtonText}>Opções</Text>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={createInfop}>
            <Text style={styles.optionButtonText}>Criar Categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={editInfop}>
            <Text style={styles.optionButtonText}>Editar Categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={deleteInfop}>
            <Text style={styles.optionButtonText}>Deletar Categoria</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end', 
    justifyContent: 'flex-end', 
    marginBottom: 20,
    marginRight: 20,
  },
  mainButton: {
    backgroundColor: "#5A875D",  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  mainButtonText: {
    color: "#C8E6C9",
    fontWeight: 'bold',
  },
  optionsContainer: {
    position: 'absolute',
    right: 0,
    bottom: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#5A875D",
  },
  optionButtonText: {
    color: "#C8E6C9",
  },
});

export default FunctionsButton;
