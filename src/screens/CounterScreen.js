import React, { useState, useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = ( state, action ) => {
    // state === currentCounter: number
    // action === { type: 'increase' || 'decrease', payload: 1}

    switch (action.type) {
        case 'increase':
            return { ...state, currentCounter: state.currentCounter + action.payload};
        case 'decrease':
            return { ...state, currentCounter: state.currentCounter - action.payload};
        default: 
            return state;
    }
}

const CounterScreen = () => {
    const [ state, dispatch ] = useReducer( reducer, { currentCounter: 0 } );
    const { currentCounter }  = state;

    return (
        <View> 
            <Button 
                title='Increase'
                onPress={ () => {
                    dispatch({ type: 'increase', payload: 1 })
                }}
            />
            <Button 
                title='Decrease'
                onPress={ () => {
                    dispatch({ type: 'decrease', payload: 1 })
                }}
            />
            <Text style={styles.text}>Current Counter is {currentCounter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default CounterScreen;
