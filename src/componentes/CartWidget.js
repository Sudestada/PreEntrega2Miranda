import { AiOutlineShoppingCart } from "react-icons/ai";
import './cartWidget.css'


function CartWidget() {
    return (
        <>
            <div>
                <button className="buttonCart">
                    <AiOutlineShoppingCart />
                </button>

            </div>

        </>
    )
}
export default CartWidget