import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import dress4 from '../dress4.png';
import dress5 from '../dress5.png';
import dress3 from '../dress3.png';
import listviewIcon from '../Listview.png';
import filterIcon from '../Filter.png';
import menuIcon from '../Menu.png';
import shoppingBagIcon from '../shoppingBag.png';
import searchIcon from '../Search (2).png';
import logoIcon from '../Logo.png';
import addCircleIcon from '../add_circle.png';

const products = [
  { id: '1', imgSrc: dress4, name: 'Office Wear', subname: 'reversible angora cardigan', price: 120 },
  { id: '2', imgSrc: dress5, name: 'Black', subname: 'reversible angora cardigan', price: 120 },
  { id: '3', imgSrc: dress3, name: 'Church Wear', subname: 'reversible angora cardigan', price: 120 },
  { id: '4', imgSrc: dress4, name: 'Lamerei', subname: 'reversible angora cardigan', price: 120 },
  { id: '5', imgSrc: dress5, name: '21 WN', subname: 'reversible angora cardigan', price: 120 },
  { id: '6', imgSrc: dress3, name: 'Lopo', subname: 'reversible angora cardigan', price: 120 },
  { id: '7', imgSrc: dress5, name: '21WN', subname: 'reversible angora cardigan', price: 120 },
  { id: '8', imgSrc: dress3, name: 'Lame', subname: 'reversible angora cardigan', price: 120 },
];

const HomeScreen = () => {
  const navigation = useNavigation();
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

  const addToCart = async (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.product} onPress={() => navigateToDetail(item)}>
      <View style={styles.imageContainer}>
        <Image source={item.imgSrc} style={styles.productImage} />
        <TouchableOpacity onPress={() => addToCart(item)}>
          <Image source={addCircleIcon} style={styles.addCircleIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.subName} numberOfLines={1}>{item.subname}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  const navigateToDetail = (item) => {
    navigation.navigate('ProductDetail', { product: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={menuIcon} style={styles.topIcon} />
        </TouchableOpacity>
        <Image source={logoIcon} style={styles.logoIcon} />
        <Image source={shoppingBagIcon} style={styles.topIcon} />
        <Image source={searchIcon} style={styles.topIcon} />
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.header}>OUR STORY</Text>
        <Image source={listviewIcon} style={styles.icon} />
        <Image source={filterIcon} style={styles.icon} />
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoIcon: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  topIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  productList: {
    alignItems: 'center',
  },
  product: {
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: '45%',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 139,
    height: 200,
    marginTop: -10,
    marginBottom: 10,
  },
  addCircleIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
  },
  productName: {
    marginRight: 40,
  },
  subName: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
    textAlign: 'auto',
    marginRight: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginRight: 80,
  },
});

export default HomeScreen;