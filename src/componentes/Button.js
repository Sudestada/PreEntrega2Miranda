import './button.css'

function Button({ buttonName }) {
    return (
        <>
            <div>
                <button className="divButton">{buttonName}</button>
            </div>

        </>
    )
}

export default Button;
