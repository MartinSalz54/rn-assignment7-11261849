import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CartScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Failed to load cart from storage', error);
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.subName} numberOfLines={1}>{item.subname}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  product: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subName: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
  },
});

export default CartScreen;

