import { useSelector, useDispatch } from 'react-redux';
import { AppAction } from '../store/appSlice';
import { ProductItemType, UserType } from '../types/genericTypes';

import { StoreType, AppStateType } from '../types/stateTypes';

const useAppViewModel = () => {
  const dispatch = useDispatch();
  const { cartList, userInfo }: AppStateType = useSelector(
    (state: StoreType) => state.app
  );

  const { addcartList, removeItemFromCart, addUser } = AppAction;

  return {
    cartList,
    userInfo,
    addcartList: (payload: ProductItemType) => dispatch(addcartList(payload)),//Add Product in CartList
    addUser: (payload: UserType) => dispatch(addUser(payload)),//Add User information
    removeItemFromCart: (id: string) => dispatch(removeItemFromCart({ id })),//Remove product from CartList
  };
};

export default useAppViewModel;
