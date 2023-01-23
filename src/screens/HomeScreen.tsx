import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import { ProductItem } from '../components';
import useHomeController from '../view-controllers/useHomeController';
import { ProductItemType } from '../types/genericTypes';
import UserName from '../components/UserName';

const HomeScreen = () => {
  const {

    onPressDetails,
    onPressAddtoCart,
    products,
    loading,
    cartList,
  } = useHomeController();



  const renderProductItem = ({ item }: { item: ProductItemType }) => {
    return (
      <ProductItem
        cartList={cartList}
        product={item}
        onPressAddtoCart={() => {
          onPressAddtoCart(item);
        }}
        onPressDetails={() => onPressDetails(item)}
      />
    );
  };

  return (
    <View style={styles.background}>
      <View>
        {loading && <ActivityIndicator />}
        <FlatList
        ListHeaderComponent={UserName}
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
    // paddingVertical: 8,
    paddingHorizontal: 8,
  },
  headerContaienr:{
    flexDirection: 'row',
    // padding: 15,
    alignItems: 'center'
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
});

export default HomeScreen;
