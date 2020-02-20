import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const BoxScreen = () => {
  return (
    <SafeAreaView style={styles.parentViewStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderColor: 'gray',
    borderWidth: 3,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },  
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;
