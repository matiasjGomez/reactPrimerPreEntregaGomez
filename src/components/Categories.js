import { useParams } from 'react-router-dom';
import jsonData from './ApiSim';

const ProductsByCategory = () => {
    const { categoryName } = useParams();

    //filter products based on selected category
    const filteredItems = jsonData.filter(product => product.category_id.toLowerCase() === categoryName.toLowerCase());

    return (
        <div>
            <h1>Item list by category: {categoryName}</h1>
            <ul>
                {filteredItems.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.sinopsis}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsByCategory