/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListcontainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/Context/CartContext';

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
            <Route path='/cart' element={<h1>cart</h1>} />
            <Route path='/checkout' element={<h1>checkout</h1>} />
          </Routes>
        </CartProvider>

      </BrowserRouter>

    </div>
  );
}

export default App;
