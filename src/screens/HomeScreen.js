import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen 123</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to the components demo"
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to the List demo"
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
