import { useState, useEffect } from 'react' 
import { getPrendas, getPrendasByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [prendas, setPrendas] = useState([])

    const{ categoryId} = useParams()

    useEffect (() => {
        const asyncFunc = categoryId ? getPrendasByCategory : getPrendas
        asyncFunc(categoryId)
        .then (response => {
            setPrendas(response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [categoryId])

    return (
            <div>
                <h1>{greeting}</h1>
                <ItemList prendas = {prendas} />
            </div>
    )
}

export default ItemListContainer
