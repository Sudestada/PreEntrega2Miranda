import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ItemListcontainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './Notification/NotificationService';
import { CartProvider } from './componentes/Context/CartContext';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';




function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListcontainer greeting='Nuestro catalogo de productos' />} />
              <Route path='/category/:categoryId' element={<ItemListcontainer />} />
              <Route path='/item/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
