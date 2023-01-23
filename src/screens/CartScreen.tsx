import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartItem } from '../components';
import useCartController from '../view-controllers/useCartController';
import { ProductItemType } from '../types/genericTypes';
import UserName from '../components/UserName';

const CartScreen = () => {
  const { cartList, onClickRemove } = useCartController();

  const renderCartItem = ({ item }: { item: ProductItemType }) => {
    return (
      <CartItem product={item} onClickRemove={() => onClickRemove(item.id)} />
    );
  };

  return (
    <View style={styles.background}>
      <View>
        <FlatList
        ListHeaderComponent={UserName}
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
    color:'red',
    textTransform:'capitalize'
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
