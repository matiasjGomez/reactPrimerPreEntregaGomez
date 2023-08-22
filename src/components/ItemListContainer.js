import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from './ApiSim';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoryName } = useParams(); // Get the category from the URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryName) {
      // Filter the products based on the category
      const filteredItems = jsonData.filter(
        (item) => item.category_id.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filteredItems);
    } else {
      // If no category is specified, show all products
      setFilteredProducts(jsonData);
    }
  }, [categoryName]);

  return (
    <>
      <ItemList products={filteredProducts} />
    </>
  );
};

export default ItemListContainer;