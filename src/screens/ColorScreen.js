import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Button, View } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <SafeAreaView> 
            <Button 
                title='Add a color'
                onPress={ () => {
                    setColors([...colors, randomRGB()]);
                }}
            />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }}/>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const randomRGB = () => {
    const reb = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${reb},${green},${blue})`;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ColorScreen;
