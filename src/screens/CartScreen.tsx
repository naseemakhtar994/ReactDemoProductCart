import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartItem } from '../components';
import useCartController from '../view-controllers/useCartController';
import { ProductItemType } from '../types/genericTypes';

const CartScreen = () => {
  const { cartList, userInfo, onClickRemove } = useCartController();

  const renderCartItem = ({ item }: { item: ProductItemType }) => {
    return (
      <CartItem title={item.productName} onClickRemove={() => onClickRemove(item.id)} />
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>{userInfo?.username}</Text>
      </View>
      <View style={styles.cartlistContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={cartList}
          ListEmptyComponent={() => <Text>{'Cart is Empty'}</Text>}
          renderItem={renderCartItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartlistContainer: {
    marginVertical: 24,
  },
});

export default CartScreen;
