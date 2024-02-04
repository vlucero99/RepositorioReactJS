import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    const increment = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };
    const decrement = () => {
        if (count > initial) {
        setCount(count - 1);
        }
    };
    const addToCart = () => {
        onAdd(count);
    };

return (
    <div className="item-count-container">
        <div className="counter-controls">
            <button className="button" onClick={decrement} disabled={count === initial}> - </button>
            <span>{count}</span>
            <button className="button" onClick={increment} disabled={count === stock}> + </button>
        </div>
        <button className="button" onClick={addToCart} disabled={count === initial}>
            Agregar al Carrito
        </button>
    </div>
    );
};

export default ItemCount;
