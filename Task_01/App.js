import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



const App = () => {
  const [inputText, setInputText] = useState('');

  const handleButtonPress = (value) => {
    setInputText((prevText) => prevText + value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title of  Game</Text>
      <TextInput
        style={styles.input}
        value={inputText}

      />
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleButtonPress(number.toString())} >

            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
  color:"red",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
  },
  buttonText: {

    fontSize: 24,
    color:"white",
    fontWeight: 'bold',
  },
});

export default App;
