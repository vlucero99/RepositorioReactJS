import { useEffect, useState } from "react"
import './ItemDetailContainer.css'
import { getPrendaById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [ prenda, setPrenda] = useState (null)
    const { itemId } = useParams() 

    useEffect(() => {
        getPrendaById(itemId)
        .then (response => {
            setPrenda(response)
        })
        .catch (error => {
            console.error (error)
        })
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...prenda} />
        </div>
    )
}

export default ItemDetailContainer;
