import { createContext, useState } from 'react';


const Context = createContext('Valor inicial')

export const CartProvider = ({children}) => {
    
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if(!isOnCart(productToAdd.id)){
      setCart(prev => [...prev, productToAdd])
    } else {
      console.log('No se agrega porque ya esta en el carrito')
    }
    

  }
  const isOnCart = (id) => {
    return cart.some(prod => prod.id === id)
  } 
    return (
        <Context.Provider value = {{cart, setCart}}>
        {children}
        </Context.Provider>
    )
}