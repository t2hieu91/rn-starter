import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const ComponentsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>ComponentsScreen 123</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentsScreen;
