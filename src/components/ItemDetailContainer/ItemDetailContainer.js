// En tu componente
import { useEffect, useState } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [prenda, setPrenda] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await db.collection('Items').doc(itemId).get();
                if (doc.exists) {
                    setPrenda({ id: doc.id, ...doc.data() });
                } else {
                    console.log('No existe la prenda con el ID especificado.');
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...prenda} />
        </div>
    );
}

export default ItemDetailContainer;

