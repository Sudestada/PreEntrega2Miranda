
export const Item = ({ brand, img, price, description }) => {
    return (
        <div>
            <h3>{brand}</h3>
            <img src={img} alt={description} />
            <p>Precio : $ {price}</p>
            <p>Descripcion : {description}</p>
        </div>
    )

}