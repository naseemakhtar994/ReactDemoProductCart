import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductDetails } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { screenMap } from './screenMap';
import LoginSceen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen';
import { AppStateType, StoreType } from '../types/stateTypes';
import { useSelector } from 'react-redux';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();
 const {  userInfo }: AppStateType = useSelector(
    (state: StoreType) => state.app
  );  return (
    <NavigationContainer>
      <Stack.Navigator>
      {!userInfo &&  <Stack.Screen name={screenMap.Login} component={LoginSceen} />}
       

        <Stack.Screen name={screenMap.Home} component={HomeScreen} />

        <Stack.Screen
          name={screenMap.ProductDetails}
          component={ProductDetails}
        />
        <Stack.Screen name={screenMap.Cart} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
