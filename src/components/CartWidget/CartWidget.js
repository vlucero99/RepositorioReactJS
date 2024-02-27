import React, { useContext } from 'react';
import cart from './assets/cart.svg'
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const style = {
    width: '30px',
    height: '30px',
    fontSize: '10px'
  };
  const { totalQuantity } = useContext(CartContext);

  console.log('Total Quantity in CartWidget:', totalQuantity);

  return (
    <Link to='/cart' className="CartWidget">
      <div style={style}>
        <img style={style} src={cart} alt="cart-widget" />
        {totalQuantity}
      </div>
    </Link>
  );
}

export default CartWidget;

