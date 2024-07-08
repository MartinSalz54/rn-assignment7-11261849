import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductItem = ({ product, onAddToCart, onRemoveFromCart, isCart }) => {
  return (
    <View style={styles.product}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      {!isCart ? (
        <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
      ) : (
        <Button title="Remove from Cart" onPress={() => onRemoveFromCart(product.id)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ProductItem;
