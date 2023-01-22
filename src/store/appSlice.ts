import { createSlice } from '@reduxjs/toolkit';
import { UserType, ProductItemType } from '../types/genericTypes';
import AppStore from './AppStore';

const initialState = AppStore;

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addcartList: (state, action: { payload: ProductItemType; type: string }) => {
      state.cartList = state.cartList.concat([
        action.payload,
      ]);
    },
    addUser: (state, action: { payload: UserType; type: string }) => {
      state.userInfo = action.payload
    },
    removeItemFromCart: (state, action: { payload: { id: string }; type: string }) => {
      state.cartList = state.cartList.filter(
        (cartItem: ProductItemType) => cartItem.id !== action.payload.id,
      );
    },
  },
});

const { addcartList, removeItemFromCart, addUser } = appSlice.actions;

export const AppAction = {
  addcartList,
  removeItemFromCart,
  addUser
};

export default appSlice.reducer;
