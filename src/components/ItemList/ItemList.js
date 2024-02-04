import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({prendas }) => {
    return (
        <div className='ListGroup'>
            {prendas.map(prod => <Item key = {prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList