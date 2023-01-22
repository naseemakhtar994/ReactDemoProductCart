import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AppStateType, StoreType } from '../types/stateTypes';

export default function UserName() {
  const { userInfo }: AppStateType = useSelector(
    (state: StoreType) => state.app
  );
  return (
    <View>
    <Text style={styles.heading}>{userInfo?.username}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '500',
    color:'red',
    textTransform:'capitalize'
  },
});