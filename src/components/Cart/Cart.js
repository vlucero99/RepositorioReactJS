// En el archivo Cart.js
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { Cart, clearCart, totalQuantity, total, RemoveItem, setTotal } = useContext(CartContext);

  useEffect(() => {
    // Recalcula el total cada vez que cambia el carrito
    const newTotal = Cart.reduce((acc, item) => acc + item.subtotal, 0);
    setTotal(newTotal);
  }, [Cart, setTotal]);

  if (Cart.length === 0) {
    return (
      <div>
        <h1> No hay productos agregados </h1>
        <Link to='/' className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Cart.map((p) => (
            <CartItem key={p.id} {...p} onRemove={RemoveItem} />
          ))}
        </tbody>
      </table>
      <div>
        <h3> Total de la Compra: ${total} </h3>
        <button onClick={() => clearCart()} className="Button">
          Limpiar carrito
        </button>
        <Link to='/checkout' className="Option">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
