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
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color demo"
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square demo"
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text input name demo"
      />
      <Button 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box demo"
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
