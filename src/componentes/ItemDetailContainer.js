import { useState, useEffect } from "react";
import { getProductsById } from "./asyncMock";
import { useParams } from "react-router-dom";



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
   console.log(typeof product)

    return (

        <div>
            <h1>Detalle de productos</h1>
            <div>
                <h2>{product[0].brand}</h2>
                <img src={product[0].img} alt={product[0].name} />
                <h3>Precio : $ {product[0].price}</h3>
                <h3>Descripcion : {product[0].description}</h3>
                <button>Agregar al carrito</button>
               
            </div>

        </div>



    )
}

export default ItemDetailContainer;
