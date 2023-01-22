import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Button from './Button';

interface CartItemProps {
  onClickRemove: () => void;
  title: string;
}

const CartItem = (props: CartItemProps) => {
  const { onClickRemove, title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={'Remove'} onPress={onClickRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 4,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:10,
    justifyContent: 'space-between',
  },
});

export default CartItem;
