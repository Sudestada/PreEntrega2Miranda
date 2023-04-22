import './itemDetail.css';
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

export default ItemDetail;