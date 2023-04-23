/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListcontainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/Context/CartContext';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';

function App() {



  return (

    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListcontainer greeting='Nuestro catalogo de productos' />} />
            <Route path='/category/:categoryId' element={<ItemListcontainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>

    </div>
  );
}

export default App;
