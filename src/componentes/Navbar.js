import './navBar.css'
import CartWidget from './CartWidget';
import Button from './Button';
import { Link, NavLink } from 'react-router-dom'

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
                    <NavLink to='/category/guitar' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Button buttonName='GUITARRAS' /></NavLink>
                        
                    <NavLink to='/category/bass' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Button buttonName='BAJOS' /></NavLink>
                    <NavLink to='/category/batery' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Button buttonName='BATERIAS' /></NavLink>
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
