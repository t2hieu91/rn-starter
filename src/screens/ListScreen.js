import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const ListScreen = () => {
    const Friends = [
        { name: 'Friend #1', age: 45},
        { name: 'Friend #2', age: 51},
        { name: 'Friend #3', age: 34},
        { name: 'Friend #4', age: 29},
        { name: 'Friend #5', age: 18},
        { name: 'Friend #6', age: 65},
        { name: 'Friend #7', age: 43},
        { name: 'Friend #8', age: 25},
        { name: 'Friend #9', age: 29},
    ];
  return (
    <FlatList 
        keyExtractor={friend => friend.name}
        data={Friends}
        renderItem={({ item }) => {
        return (
            <View style={styles.itemStyle}>
                <Text style={styles.text}>
                    {item.name} - Age {item.age}
                </Text>
            </View>
        )
        }}
    />
  );
};

const styles = StyleSheet.create({
    itemStyle: {
        borderColor: 'gray',
        borderWidth: 1
    },
    text: {
        marginVertical: 30,
    }
});

export default ListScreen;
