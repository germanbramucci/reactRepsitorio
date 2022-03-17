
import './Styles/navbar.css';
import './Styles/itemCount.css'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Componentes/ItemListContainer';
import ItemList from "./components/ItemList";




function App() {

  return (
    <div className="App">  
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
