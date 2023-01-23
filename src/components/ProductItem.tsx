import React, { memo } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ProductItemType } from '../types/genericTypes';
import Button from './Button';

interface ProductItemProps {
  onPressAddtoCart: () => void;
  onPressDetails: () => void;
  product: ProductItemType;
  cartList: any;
}

const ProductItem = memo(function ProductItem(props: ProductItemProps) {
  const { onPressDetails, onPressAddtoCart, cartList, product } = props;

  const selectedProduct = cartList.find((item: ProductItemType) => item?.id == product.id);



  return (
    <View style={styles.container} >
      <View style={styles.productNameConyaier}>
      <Text style={styles.title}>{product.productName}</Text>
      <Text style={{
        fontSize:20,
        color:'green'
      }}>{`₹ ${product.price}`}</Text>
      </View>
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
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 4,
  },
  productNameContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  }
});

export default ProductItem;
