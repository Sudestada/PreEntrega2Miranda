import { Item } from "./Item";
import './itemList.css'

function ItemList({products}) {
    return (
        <div className="styleList">
            {products.map(products => <Item key = {products.id} {...products}/>
                
            )}
        </div>
    )

}

export default ItemList;