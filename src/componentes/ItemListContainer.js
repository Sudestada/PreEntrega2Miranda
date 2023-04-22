
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection} from 'firebase/firestore'
import { db } from './service/fireBaseConfig'

function ItemListcontainer({ greeting }) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    
    useEffect(() => {
        const productsRef = collection(db, 'products')
        getDocs(productsRef)
        .then(snapshot => {
            console.log(snapshot)
            const productsAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            console.log(productsAdapted)
        })

    }, [categoryId])

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