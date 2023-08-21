
import { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom'
import jsonData, { getItemById } from './ApiSim'


export function ItemDetail() {
    const [item, setItem] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getItemById(id).then(item => {
            setItem(item);
        })
        .catch(console.log);

    }, [id]);

    return (
        <div>
          {item ? (
            <>
              <h2>{item.name}</h2>
              <p>{item.sinopsis}</p>
              <img src={item.image} alt={item.name} />
              <p>Price: ${item.price}</p>
            </>
          ) : (
            <p>Now Loading...</p>
          )}
        </div>
      );
    }

export default ItemDetail;