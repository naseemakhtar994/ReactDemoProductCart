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
                source={require('../../assets/cart-svgrepo-com.png')}
                style={styles.cartImg}
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
        backgroundColor: '#fff',
        height: 15,
        borderWidth: 1,
        width: 15,
        textAlign: "center",
        borderRadius: 100,
        color: '#000',
        position: 'absolute',
        right: 0,
        fontSize:11
        // paddingTop: 3,
    },
    cartImg: {
        width: 35,
        height: 35,
    },
});

export default CartIcon;
