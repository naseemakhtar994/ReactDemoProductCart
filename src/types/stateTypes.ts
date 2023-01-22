import {ProductItemType, UserType} from './genericTypes';

export type AppStateType = {
cartList: Array<ProductItemType>;
userInfo:UserType,
};

export type StoreType = {
  app: AppStateType;
};
