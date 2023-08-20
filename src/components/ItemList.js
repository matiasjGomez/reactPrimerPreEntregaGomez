
import './style.css';
import { useState, useEffect } from 'react';
import { products } from './ApiSim';
import { Link } from 'react-router-dom'

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products); // Use the imported products array
  }, []);

  return (
    <div>
        <h1>
            Product List
        </h1>
        <ul>
            {items.map(product => (
                <div key={product.id} className="container-fluid py-3 containCards">
                    <div className="row">
                    <div id="product" className="col-md-6 card mb-4 item">
                        <div class="item_img cartItemImg">
                            <img className="car-img-top" src={product.image} alt={product.name} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.sinopsis}</p>
                            <h6 class="card-price">${product.price}</h6>
                            <Link to="/item/:id" className="btn">Ver más</Link>
                        </div>
                    </div>
                    </div>
                </div>
                    
            ))}
        </ul>
    </div>
  )
};

export default ItemList