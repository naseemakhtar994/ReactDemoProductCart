import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ProductItemType } from '../types/genericTypes';
import { WebView } from 'react-native-webview';

import useProductDetailsController from '../view-controllers/useProductDetailsController';

interface ProductDetailsProps {
  route: { params: ProductItemType };
}

const ProductDetails = (props: ProductDetailsProps) => {
  const product = props?.route?.params;

  const { productName, onPressAddtoCart, buttontxt, userInfo } =
    useProductDetailsController(product);

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>{userInfo?.username}</Text>
      </View>

      <Text
        style={styles.input}
      >
        {productName}
      </Text>
      <WebView
        source={{ html: `<iframe width="100%" height="50%" src="${product.video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>` }}
        style={{ marginTop: 20 }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={onPressAddtoCart}>
        <Text style={styles.btnText}>{buttontxt}</Text>
      </TouchableOpacity>
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
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#000',
    alignItems: 'center',
    marginVertical: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 8,
  },
  inputView: {
    marginVertical: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default ProductDetails;
