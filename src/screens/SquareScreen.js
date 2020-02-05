import React, { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREASE = 20;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
  return (
    <SafeAreaView>
      <ColorCounter 
            onIncrease={() => { setRed(red + COLOR_INCREASE) }}
            onDecrease={() => { setRed(red - COLOR_INCREASE) }}
            color="Red" 
      />
      <ColorCounter 
            onIncrease={() => { setGreen(green + COLOR_INCREASE) }}
            onDecrease={() => { setGreen(green - COLOR_INCREASE) }}
            color="Green" 
        />
      <ColorCounter 
            onIncrease={() => { setBlue(blue + COLOR_INCREASE) }}
            onDecrease={() => { setBlue(blue - COLOR_INCREASE) }}
            color="Blue" 
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SquareScreen;
