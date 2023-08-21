import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
    const { categoryName } = useParams(); // hice esto para obtener la category del URL
  
    return (
      <>
        <ItemList categoryName={categoryName} />
      </>
    );
  };

export default ItemListContainer