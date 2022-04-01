
import './Styles/navbar.css';
import './Styles/itemCount.css'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Componentes/ItemListContainer';
import Nosotros from './Componentes/Nosotros';
import Login from './Componentes/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import { Cart } from './Componentes/Cart';
import { CartProvider } from './Context/CartContext'





function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        
        <NavBar/>
        
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/camisetas/:categoryId' element={ <ItemListContainer/> }/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/nosotros' element={ <Nosotros/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
        
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
