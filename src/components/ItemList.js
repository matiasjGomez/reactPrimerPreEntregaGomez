import './style.css'

import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <>
      <h1 className='px-3'>Product List</h1>

      {products.map((product) => (
        <div key={product.id}>
          <div className="row px-4">
            <div id="product" className="card col-md-6 mb-4 item px-0">
              <div className="item_img cartItemImg">
                <img className="card-img-top" src={product.image} alt={product.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.sinopsis}</p>
                <h6 className="card-price">${product.price}</h6>
                <Link to={`/item/${product.id}`} className="btn">Ver más</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;

