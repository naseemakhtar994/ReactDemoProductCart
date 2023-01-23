import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ProductItemType } from '../types/genericTypes';
import Button from './Button';

interface CartItemProps {
  onClickRemove: () => void;
  product: ProductItemType;
}

const CartItem = (props: CartItemProps) => {
  const { onClickRemove, product } = props;

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'column'
      }}>
        <Text style={styles.title}>{product.productName}</Text>
        <Text style={styles.price}>{`₹ ${product.price}`}</Text>

      </View>
      <Button title={'Remove'} onPress={onClickRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 4,
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'green'
  },
  title: {

    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

export default CartItem;
