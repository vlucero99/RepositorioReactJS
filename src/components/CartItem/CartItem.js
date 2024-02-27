import React, { useState } from 'react';
import './CartItem.css';

const CartItem = ({ id, nombre, precio, quantity, onRemove }) => {
  const [countToDelete, setCountToDelete] = useState(1); // Estado para almacenar la cantidad a eliminar
  const subtotal = precio * quantity;

  const handleDelete = () => {
    // Llama a onRemove con la cantidad especificada por el contador
    onRemove(id, countToDelete);
  };

  return (
    <tr className="cart-item">
      <td>{nombre}</td>
      <td>${precio}</td>
      <td>{quantity}</td>
      <td>${subtotal}</td>
      <td>
        <input
          type="number"
          id={`countToDelete-${id}`}
          value={countToDelete}
          min="1"
          max={quantity}
          onChange={(e) => setCountToDelete(parseInt(e.target.value))}
        />
        <button className='Button' onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CartItem;

