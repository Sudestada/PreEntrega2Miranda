import './navBar.css'
import CartWidget from './CartWidget';
import Button from './Button';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                
                <nav className="headerNav">
                <div className='divNameShop'>
                    <span className='divSpan'>
                        D  E  C  I  B  E  L  I  U  S 🤘
                    </span>
                </div>

                    <div className='navDiv'>
                        <NavLink to='/category/guitar'><Button buttonName='GUITARRAS' /></NavLink>
                        <NavLink to='/category/bass'><Button buttonName='BAJOS' /></NavLink>
                        <NavLink to='/category/batery'><Button buttonName='BATERIAS' /></NavLink>
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
