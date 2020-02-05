import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [currentCounter, setCounter] = useState(0);
    return (
        <View> 
            <Button 
                title='Increase'
                onPress={ () => {
                    setCounter(currentCounter + 1);
                }}
            />
            <Button 
                title='Decrease'
                onPress={ () => {
                    setCounter(currentCounter - 1);
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
