import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ProductItemType } from '../types/genericTypes';
import Button from './Button';

interface ProductItemProps {
  onPressAddtoCart: () => void;
  onPressDetails: () => void;
  title: string;
  productId: string;
  cartList: any;
}

const ProductItem = (props: ProductItemProps) => {
  const { onPressDetails, onPressAddtoCart, title, cartList, productId } = props;

  const selectedProduct = cartList.find((item: ProductItemType) => item?.id == productId);

  return (
    <View style={styles.container} >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Details"
          onPress={onPressDetails}
        />
        <Button
          title={selectedProduct ? "Added to cart" : 'Add to cart'}
          onPress={onPressAddtoCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop:10,
    justifyContent: 'space-between',
  }
});

export default ProductItem;
