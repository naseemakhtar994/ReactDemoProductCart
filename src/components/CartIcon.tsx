import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { screenMap } from '../navigation/screenMap';

interface CartIconProps {
    cartCount: number;
}

const CartIcon = (props: CartIconProps) => {
    const { cartCount } = props;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screenMap.Cart)}
            style={styles.container}>
            <Image
                style={styles.cartImg}
                resizeMode='contain'
                source={require('../../assets/carticon.png')}
            />
            {cartCount > 0 && <Text style={styles.cartCount}>{cartCount}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    cartCount: {
        backgroundColor: '#000',
        height: 30,
        width: 30,
        textAlign: "center",
        borderRadius: 100,
        color: '#fff',
        position: 'absolute',
        right: 0,
        paddingTop:5,
    },
    cartImg: {
        width: 50,
        height: 50,
    },
});

export default CartIcon;
