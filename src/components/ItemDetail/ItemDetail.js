import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, imagen, nombre, precio, descripción, stock, categoria }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                {imagen}
            </picture>
            <section>
                <p className="Info">
                    Categoría: {categoria}
                </p>
                <p className="Info">
                    ID: {id}
                </p>
                <p className="Info">
                    {descripción}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>
        </article>
    );
}

export default ItemDetail;
