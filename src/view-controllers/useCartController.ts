import useAppViewModel from '../view-models/useAppViewModel';
const useCartController = () => {
  const { cartList, userInfo, removeItemFromCart } = useAppViewModel();

  // ** RemoveItem from cart 
  const onClickRemove = (id: string) => {
    removeItemFromCart(id);
  };

  return {
    userInfo,
    onClickRemove,
    cartList,
  };
};

export default useCartController;
