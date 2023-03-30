/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListcontainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<ItemListcontainer/>}/>
      <Route path='/category/:categoryId' element ={<ItemListcontainer/>}/>

    </Routes>
    </BrowserRouter>
      <Navbar />
      <ItemListcontainer greeting = 'Nuestro catalogo de productos'/>
      <ItemDetailContainer />
    </>






  );
}

export default App;
