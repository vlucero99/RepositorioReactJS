import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ id, imagen, nombre, precio, descripción, stock, categoria }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const { AddItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    setSelectedQuantity(quantity);

    const item = {
      id,
      nombre,
      precio,
    };

    AddItem(item, quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>{imagen}</picture>
      <section>
        <p className="Info">Categoría: {categoria}</p>
        <p className="Info">ID: {id}</p>
        <p className="Info">{descripción}</p>
        <p className="Info">Precio: ${precio}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <>
            <Link to="/cart" className="Option">
              Terminar compra
            </Link>
            <Link to="/" className="Option">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
