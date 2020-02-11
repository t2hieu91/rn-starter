import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREASE = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
      // color === 'red', 'green', 'blue'
      // change === +20, -20

      switch (color) {
        case 'red' :
          red + change > 255 || red + change < 0 ? null : setRed(red + change);
          return;
        case 'green' :
          green + change > 255 || green + change < 0 ? null : setGreen(green + change);
          return;
        case 'blue' :
          blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
          return;
        default: return;
      }
    }

  return (
    <SafeAreaView>
      <ColorCounter 
            onIncrease={() => { setColor('red', COLOR_INCREASE) }}
            onDecrease={() => { setColor('red', -1 * COLOR_INCREASE) }}
            color="Red" 
      />
      <ColorCounter 
            onIncrease={() => { setColor('green', COLOR_INCREASE) }}
            onDecrease={() => { setColor('green', -1 * COLOR_INCREASE) }}
            color="Green" 
        />
      <ColorCounter 
            onIncrease={() => { setColor('blue', COLOR_INCREASE) }}
            onDecrease={() => { setColor('blue', -1 * COLOR_INCREASE) }}
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
