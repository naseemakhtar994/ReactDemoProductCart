import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { ProductItemType } from '../types/genericTypes';
import { WebView } from 'react-native-webview';

import useProductDetailsController from '../view-controllers/useProductDetailsController';
import UserName from '../components/UserName';

interface ProductDetailsProps {
  route: { params: ProductItemType };
}

const ProductDetails = (props: ProductDetailsProps) => {
  const product = props?.route?.params;

  const { productName, onPressAddtoCart, buttontxt, userInfo } =
    useProductDetailsController(product);

  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#fff'
    }}>
      <View style={styles.background}>
        <UserName />

        <Text
          style={[styles.input, styles.productName]}
        >
          {productName}
        </Text>

        <Text
          style={[styles.input, styles.price]}
        >
          {`Price : ${product.price}`}
        </Text>


        <Text
          style={styles.input}
        >
          {`Processer : ${product.cpu}`}
        </Text>

        <Text
          style={styles.input}
        >
          {`Storage : ${product.storage}`}
        </Text>

        <Text
          style={styles.input}
        >
          {`RAM : ${product.ram}`}
        </Text>

        <Text
          style={[styles.input, { lineHeight: 22 }]}
        >
          {product.description}
        </Text>

        <WebView
          startInLoadingState={true}
          source={{ html: `<iframe width="100%" height="50%" src="${product.video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>` }}
          style={{ marginTop: 20, height: 500 }}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={onPressAddtoCart}>
          <Text style={styles.btnText}>{buttontxt}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  productName: { fontSize: 20, fontWeight: 'bold' },

  heading: {
    fontSize: 28,
    fontWeight: '500',
  },
  price: { fontSize: 20, fontWeight: 'bold', color: 'green' },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 14,
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
    padding: 5,

    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default ProductDetails;
