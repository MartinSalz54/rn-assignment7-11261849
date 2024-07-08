import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { productId, productName } = route.params; // Assuming you pass productId and productName from HomeScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Text style={styles.text}>Product ID: {productId}</Text>
      <Text style={styles.text}>Product Name: {productName}</Text>
      {/* Add more details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ProductDetailScreen;

