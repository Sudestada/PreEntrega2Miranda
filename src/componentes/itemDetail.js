import ItemCount from './ItemCount'
import { useCart } from './Context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, brand, img, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, brand, price, quantity
        }
        addItem(productToAdd)
    }

    return (
        <article>
            <header>
                <h2>
                    {brand}
                </h2>
            </header>
            <picture>
                <img src={img} alt={brand} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                {
                    isInCart(id) ? (
                        <Link to='/cart'><button>Terminar compra</button></Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;