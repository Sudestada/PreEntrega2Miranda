import './itemDetail.css';
import { useContext } from 'react';
import { Context } from '../componentes/Context/CartContext';

const itemDetail = (id, name, img, price, category, stock) =>{
    const {addItem} = useContext(Context)

    const handleOnAdd = (quantity) => {
        const productToAdd = {id, name, price, quantity}
    }
    addItem(productToAdd)
}