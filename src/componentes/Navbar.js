import './navBar.css'
import CartWidget from './CartWidget';
import Button from './Button';

function Navbar() {
    return (
        <>
            <header>
                <nav className="headerNav">
                    <div className='navDiv'>
                        <Button buttonName = 'Headphones'/>
                        <Button buttonName = 'Speakers'/>
                        <Button buttonName = 'SoundCards'/>
                    </div>
                    <div className='divNameShop'>
                        <span className='divSpan'>
                            D  E  C  I  B  E  L  I  U  S 🤘
                        </span>
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
