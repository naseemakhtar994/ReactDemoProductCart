import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { ProductItem } from '../components';
import useHomeController from '../view-controllers/useHomeController';
import { ProductItemType } from '../types/genericTypes';
import UserName from '../components/UserName';

const HomeScreen = () => {
  const {
    userInfo,
    onPressDetails,
    onPressAddtoCart,
    onPressCart,
    products,
    loading,
    cartList,
  } = useHomeController();

  const renderProductItem = ({ item }: { item: ProductItemType }) => {
    return (
      <ProductItem
        cartList={cartList}
        productId={item.id}
        title={item.productName}
        onPressAddtoCart={() => {
          onPressAddtoCart(item);
        }}
        onPressDetails={() => onPressDetails(item)}
      />
    );
  };

  return (
    <View style={styles.background}>
      <UserName />

      <View style={styles.productListContainer}>
        {loading && <ActivityIndicator />}
        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={renderProductItem}
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
    color: 'red',
    textTransform: 'capitalize'
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e7e7e7',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  productListContainer: {
    marginVertical: 24,
  },
});

export default HomeScreen;
