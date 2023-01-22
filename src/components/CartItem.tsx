import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface CartItemProps {
  onClickRemove: () => void;
  title: string;
}

const CartItem = (props: CartItemProps) => {
  const { onClickRemove, title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Button title={'Remove'} onPress={onClickRemove} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CartItem;
