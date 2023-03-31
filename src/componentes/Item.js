import './item.css'
export const Item = ({ brand, img, price, description }) => {
    return (
        <div className='card'>
            <div className='divTitle'>
                <h3>Marca : {brand}</h3>
            </div>
            <div className='divImage'>
                <img src={img} alt={description} width="100" height="200" />
            </div>

            <div className='divDescription'>
                <p>Precio : $ {price}</p>
                <p>Descripcion : {description}</p>
            </div>

        </div>
    )

}