import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProductList = ({ products }) => {
  return (
    <ScrollView>
      {products.map(product => (
        <View key={product.id} style={styles.productItem}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>Giá: ${product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <ScrollView horizontal>
            {product.images.map(imageUrl => (
              <Image key={imageUrl} source={{ uri: imageUrl }} style={styles.productImage} />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDescription: {
    marginTop: 5,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
});

export default ProductList;
