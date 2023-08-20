
/*import { useState, useEffect } from 'react';
import jsonData from '../json/products.json';

const ProductList = () => {
    const [products, setProducts] = useState ([]);

    useEffect(() => {
      setProducts(jsonData);
    },[])
    
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category_id}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default ProductList;*/