import { AiOutlineShoppingCart } from "react-icons/ai";
import './cartWidget.css'
import { useCart } from "./Context/CartContext";


function CartWidget() {
    const { totalQuantity } = useCart()
    return (
        <>
            <button className="buttonCart">
                <AiOutlineShoppingCart to= '/cart' />
                {totalQuantity}
            </button>

        </>
    )
}
export default CartWidget