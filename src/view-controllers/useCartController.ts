import useAppViewModel from '../view-models/useAppViewModel';
const useCartController = () => {
  const { cartList, removeItemFromCart } = useAppViewModel();

  // ** RemoveItem from cart 
  const onClickRemove = (id: string) => {
    removeItemFromCart(id);
  };

  return {
    onClickRemove,
    cartList,
  };
};

export default useCartController;
