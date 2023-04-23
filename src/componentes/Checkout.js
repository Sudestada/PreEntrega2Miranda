import { useCart } from "./Context/CartContext"

const Checkout = () => {
    const {cart, total} = useCart()
    const createOrder = (userData) => {
        const objOrder = {
            buyer : {
                name: 'Cristian Miranda',
                phone: '12343423',
                email: 'imbuyer@gmail.com'
            },
            item: cart,
            total
        }
    }
    return (
        <div>
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            <button onClick={createOrder}>Crear Orden</button>
        </div>
    )
}

export default Checkout;