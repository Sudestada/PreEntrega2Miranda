import { Item } from "./Item";
import './itemList.css'

function ItemList({ products }) {
    return (
        <div className="styleList">
            <div>
                {products.map(products => <Item key={products.id} {...products} />

                )}
            </div>
        </div>

    )

}

export default ItemList;