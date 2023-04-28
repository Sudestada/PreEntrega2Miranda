import { AiOutlineShoppingCart } from "react-icons/ai";
import './cartWidget.css'
import { useCart } from "./Context/CartContext";
import { Link } from "react-router-dom";


function CartWidget() {
    const { totalQuantity } = useCart()
    return (
        <>
        <Link to='/cart'>
        <button className="buttonCart">
                <AiOutlineShoppingCart />
                {totalQuantity}
            </button>
        </Link>
            

        </>
    )
}
export default CartWidget