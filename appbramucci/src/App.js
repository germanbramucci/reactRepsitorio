
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




function App() {

  return (
    <BrowserRouter>
      
      <NavBar/>
      
      <Routes>
        <Route path='/' element={ <ItemListContainer/> }/>
        <Route path='/camisetas/:categoryId' element={ <ItemListContainer/> }/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/nosotros' element={ <Nosotros/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='*' element={ <Navigate to='/'/> }/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
