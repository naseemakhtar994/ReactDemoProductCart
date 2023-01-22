import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import useAppViewModel from '../view-models/useAppViewModel';
import { screenMap } from '../navigation/screenMap';
import React from 'react';

const useHomeController = () => {
  const navigation = useNavigation();
  const { addcartList, cartList, userInfo } = useAppViewModel();
  const [products, setProducts] = React.useState();
  const [loading, setLoading] = React.useState(true);
  
  useEffect(() => {
    // Get Product From Api
    getProducts();
  }, []);

  const getProducts = useCallback(async () => {
    const response = await fetch(
      'https://mocki.io/v1/d46dc365-f752-46ee-b0cd-c136aec38e00'
    ).then((response) => response.json());
    setProducts(response);
    setLoading(false);
  }, []);

  // ** Add Product to Cart List
  const onPressAddtoCart = (product: any) => {
    // Check if product is already added in cart list navigate to Cart Screen
    const selectedProduct = cartList.find((item) => item?.id == product.id);

    if (selectedProduct) {
      navigation.navigate(screenMap.Cart);
    } else {
      addcartList(product);
    }
  };

  // ** Navigating to Product Details 
  const onPressDetails = (product: any) => {
    navigation.navigate(screenMap.ProductDetails, product);
  };

  // ** Navigating to Cart  Screen 
 const onPressCart = () => {
    navigation.navigate(screenMap.Cart);
  };

  return {
    onPressAddtoCart,
    onPressCart,
    onPressDetails,
    products,
    loading,
    userInfo,
    cartList,
  };
};

export default useHomeController;
