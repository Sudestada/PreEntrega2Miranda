import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc} from 'firebase/firestore'
import { db} from './service/fireBaseConfig'



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productRef = doc(db, 'products', productId)

        getDoc(productRef)
        .then(snapshot => {
            console.log(snapshot)
            const data = snapshot.data()
            const productAdapted = {id: snapshot.id, ...data}
            setProduct(productAdapted)
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
    return (

        <div>
            <h1>Detalle de productos</h1>
            <div>
                <ItemDetail {...product} />
            </div>

        </div>



    )
}

export default ItemDetailContainer;
