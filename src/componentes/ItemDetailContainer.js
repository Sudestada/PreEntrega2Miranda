import { useState, useEffect } from "react";
import { getProductsById } from "./asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if (loading) {
        return <h1>Cargando ...</h1>
    }
    console.log(product)

    return (

        <div>
            <h1>Detalle de productos</h1>
            <div>
                <ItemDetail {...product[0]} />
            </div>

        </div>



    )
}

export default ItemDetailContainer;
