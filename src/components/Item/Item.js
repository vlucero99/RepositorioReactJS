import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, nombre, imagen, precio,}) => {

  return(
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
            Precio: ${precio}
          </p>
        </section>
        <footer className="ItemFooter">
          <Link to={`/Item/${id}`} className="Option"> Ver Detalle </Link>
        </footer>
      </article>
    )
}

export default Item