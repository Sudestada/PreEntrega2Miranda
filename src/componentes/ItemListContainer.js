import { getProducts } from "./asyncMock";
import { Greeting } from "./Greeting";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";


function ItemListcontainer() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])
    console.log(getProducts())

    return (
        <>
            <Greeting />
            <ItemList products={products} />
        </>



    )
}

export default ItemListcontainer;