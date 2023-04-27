/* import './itemDetail.css';
import { useContext } from 'react';
import { Context } from './Context/CartContext';
import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, brand, img, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    
    const handleOnAdd = (count) => {
        const objProductToAdd = { id, brand, price, count }

        console.log('Agregue al carrito :', count)
        setQuantity(count)
 
    }
    return (

        <div>
            <h2>{brand}</h2>
            <img src={img} alt={brand} />
            <h3>Precio : $ {price}</h3>
            <h3>Stock : {stock}</h3>
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    ) : (
                        <button>Finalizar compra</button>
                    )
                }
            </footer>


        </div>


    )
}

export default ItemDetail; */
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
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {brand}
                </h2>
            </header>
            <picture>
                <img src={img} alt={brand} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail