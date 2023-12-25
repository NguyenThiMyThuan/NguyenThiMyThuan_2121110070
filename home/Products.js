import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ProductList from '../components/ProductlList';

const YourComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        DANH SÁCH SẢN PHẨM
      </Text>
      <ProductList products={products} />
    </View>
  );
};

export default YourComponent;
