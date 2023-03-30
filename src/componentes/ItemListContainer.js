import { getProducts} from "./asyncMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListcontainer({greeting}) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    console.log(categoryId)
    useEffect(() => {
        
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])
    console.log(getProducts())

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>



    )
}

export default ItemListcontainer;