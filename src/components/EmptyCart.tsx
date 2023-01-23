import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const EmptyCart = () => {


    return (
        <View style={styles.container}>

            <Text style={styles.text}>{'Cart is Empty'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        flex: 1,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
});

export default EmptyCart;
