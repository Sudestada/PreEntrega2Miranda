import './navBar.css'
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <>
            <header>
                <nav className="headerNav">
                    <div className='navDiv'>
                        <button className='navButton'>
                            Headphones
                        </button>
                        <button className='navButton'>
                            Speakers
                        </button>
                        <button className='navButton'>
                            SoundCards
                        </button>
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
