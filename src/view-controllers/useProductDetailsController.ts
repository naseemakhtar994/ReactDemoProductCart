import { useEffect, useState } from 'react';
import { ProductItemType } from '../types/genericTypes';
import useAppViewModel from '../view-models/useAppViewModel';
import { useNavigation } from '@react-navigation/native';
import { screenMap } from '../navigation/screenMap';
const useProductDetailsController = (product: ProductItemType) => {
  const navigation = useNavigation();
  const { userInfo, cartList, addcartList } = useAppViewModel();

  const selectedProduct = cartList.find((item) => item?.id == product.id);

  const [buttontxt, setButtontext] = useState<string>();

  useEffect(() => {
    // if product is already added change text
    setButtontext(selectedProduct ? 'Go to Cart' : 'Add to Cart');
  }, [selectedProduct])
  console.log(cartList);


  const onPressAddtoCart = () => {
    if (selectedProduct) {
      // Navigating to Cart Screen
      navigation.navigate(screenMap.Cart);
    } else {
      // Add Product To Cart List
      addcartList(product);
    }

    if (!selectedProduct) setButtontext('Go to Cart');
  };

  return {
    productName: product.productName,
    buttontxt,
    setButtontext,
    onPressAddtoCart,
    userInfo,
  };
};

export default useProductDetailsController;
