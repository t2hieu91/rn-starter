import React, { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Text style={styles.text}>Input Name:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={ (newValue) => setName(newValue) }
      />
      <Text>Your Name is: {name}</Text>
      <Text style={styles.text}>Input Password:</Text>
      <TextInput 
        style={styles.input}
        value={password}
        onChangeText={ (newValue) => setPassword(newValue) }
        secureTextEntry={true}
      />
      { password.length < 4 ? <Text>Password must be 4 charater</Text> : null }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  input: {
    margin: 15,
    borderColor: 'gray',
    borderWidth: 1,
    height: 30
  }
});

export default TextScreen;
