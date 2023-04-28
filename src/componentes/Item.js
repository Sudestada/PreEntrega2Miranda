import './item.css'
import {Link} from "react-router-dom"




export const Item = ({ id, brand, img, price, description }) => {
    
    const handleClick = (e) => {
        console.log(e)
        e.preventDefault()
        e.stopPropagation()
    }
    return (
        <div className='card' onClick={handleClick}>
            <div className='divTitle'>
                <h3>Marca : {brand}</h3>
            </div>
            <div className='divImage'>
                <img src={img} alt={description} width="100" height="200" />
            </div>

            <div className='divDescription'>
                <p>Precio : $ {price}</p>
                <p>Descripcion : {description}</p>
                <Link to={`/Item/${id}`}><button>Ver detalle</button></Link>
            </div>

        </div>
    )

}

export default Item;