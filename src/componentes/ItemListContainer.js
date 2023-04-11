
import {getProducts, getProductsByCategory} from "./asyncMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListcontainer({ greeting }) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    console.log(categoryId)
    useEffect(() => {
        const asyncFuntion = categoryId ? getProductsByCategory : getProducts
        asyncFuntion(categoryId)
            .then(products => {
                setProducts(products)

            })
            .catch(Error =>{
                console.log(Error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    if(loading){
        return <h1>Cargando...</h1>


    }
  


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