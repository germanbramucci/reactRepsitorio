
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
import Footer from './Componentes/Footer';





function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        
        <NavBar
        link1={"Europa"}
        link2={"America"}
        link3={"Selecciones"}
        />
        
        <Routes>
         <Route path="/" element={ <ItemListContainer heading={"Todas las Camisetas"} /> } ></Route>

          <Route path="/category/:category" element={ <ItemListContainer heading={"Todas las Camisetas"} /> }></Route>

          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
