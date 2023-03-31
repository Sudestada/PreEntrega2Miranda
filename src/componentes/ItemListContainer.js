import { getProducts } from "./asyncMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListcontainer({ greeting }) {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    console.log(categoryId)
    useEffect(() => {

        getProducts()
            .then(products => {
                setProducts(products)

            })
    }, [])
    console.log(getProducts())


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                <h1 style={{color: "white"}}>{greeting}</h1>
            </div>
            <ItemList products={products} />
        </div>






    )
}

export default ItemListcontainer;