import React, { useReducer, useState } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREASE = 15;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

  switch (action.type) {
    case 'change_red':
      if (state.red + action.payload > 255 || state.red + action.payload < 0 ) {
        return state;
      } else {
        return { ...state, red: state.red + action.payload};
      }
    case 'change_green':
      if (state.green + action.payload > 255 || state.green + action.payload < 0 ) {
        return state;
      } else {
        return { ...state, green: state.green + action.payload};
      }
    case 'change_blue':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0 ) {
        return state;
      } else {
        return { ...state, blue: state.blue + action.payload};
      }
    default: 
      return state;
  }
};

const SquareScreenWitReducer = () => {
  const [ state, dispatch ] = useReducer(reducer, { red:0, green:0, blue:0 });
  const { red, green, blue } = state;

  return (
    <SafeAreaView>
      <Text style={styles.text}>With Additional Hook Reducer (useReducer)</Text>
      <ColorCounter 
            onIncrease={() => { dispatch({ type: 'change_red', payload: COLOR_INCREASE }) }}
            onDecrease={() => { dispatch({ type: 'change_red', payload: -1 * COLOR_INCREASE }) }}
            color="Red" 
      />
      <ColorCounter 
            onIncrease={() => { dispatch({ type: 'change_green', payload: COLOR_INCREASE }) }}
            onDecrease={() => { dispatch({ type: 'change_green', payload: -1 * COLOR_INCREASE }) }}
            color="Green" 
        />
      <ColorCounter 
            onIncrease={() => { dispatch({ type: 'change_blue', payload: COLOR_INCREASE }) }}
            onDecrease={() => { dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREASE }) }}
            color="Blue" 
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </SafeAreaView>
  );
}

const SquareScreenWithState = () => {
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
      <Text style={styles.text}>With basic Hook (useState)</Text>
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

export default SquareScreenWitReducer;//SquareScreenWithState;
