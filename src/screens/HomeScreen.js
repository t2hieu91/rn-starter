import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen !</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to the components demo"
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to the List demo"
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to the Image demo"
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
