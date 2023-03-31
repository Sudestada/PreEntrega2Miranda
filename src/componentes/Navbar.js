import './navBar.css'
import CartWidget from './CartWidget';
import Button from './Button';

function Navbar() {
    return (
        <>
            <header>
                <div className='divNameShop'>
                    <span className='divSpan'>
                        D  E  C  I  B  E  L  I  U  S 🤘
                    </span>
                </div>
                <nav className="headerNav">

                    <div className='navDiv'>
                        <Button buttonName='GUITARRAS' />
                        <Button buttonName='BAJOS' />
                        <Button buttonName='BATERIAS' />
                    </div>

                    <div className='divCart'>
                        <CartWidget />
                    </div>
                </nav>
            </header>
        </>
    )

}

export default Navbar;
