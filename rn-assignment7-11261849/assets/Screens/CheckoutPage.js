
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import removeIcon from '../remove.png'; // Adjust the path if necessary

const productsData = [
  { id: '1', imgSrc: require('../dress4.png'), name: 'Office Wear', subname: 'reversible angora cardigan', price: 120 },
  { id: '2', imgSrc: require('../dress5.png'), name: 'Lameri', subname: 'reversible angora cardigan', price: 120 },
  { id: '3', imgSrc: require('../dress3.png'), name: 'Church Wear', subname: 'reversible angora cardigan', price: 120 },
];

const CheckoutPage = () => {
  const [products, setProducts] = useState(productsData); // State to manage products in checkout

  // Function to remove a product from the list
  const removeProduct = (productId) => {
    const updatedProducts = products.filter(item => item.id !== productId);
    setProducts(updatedProducts);
  };

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.imgSrc} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productsubName}>{item.subname}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeProduct(item.id)}>
        <Image source={removeIcon} style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLogoText}>
          <Image source={require('../Logo.png')} style={styles.logoIcon} />
          <Text style={styles.headerText}>CHECKOUT</Text>
        </View>
        <Image source={require('../Search (2).png')} style={styles.searchIcon} />
      </View>

      {/* Product List Section */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
      
      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>${products.reduce((total, item) => total + item.price, 0)}</Text>
      </View>
      <View style={styles.footers}>
        <Text style={styles.footersText}>CHECKOUT</Text>
        <Text style={styles.totalPrice}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footersText:{
    marginLeft: 160,

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerLogoText: {
    alignItems: 'center',
  },
  logoIcon: {
    width: 80,
    height: 40,
    marginBottom: 4,
    marginLeft: 80,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 100,
    marginTop: 30,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginBottom: 60,
  },
  productList: {
    padding: 16,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 90,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    marginBottom: 4,
  },
  productsubName: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
    textAlign: 'auto',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeIcon: {
    width: 24,
    height: 24,
    marginTop: 80,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutPage;
