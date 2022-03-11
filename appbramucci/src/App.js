
import './Styles/navbar.css';
import './Styles/itemCount.css'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Componentes/ItemListContainer';


function App() {
  let texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequatur officia accusamus beatae quas numquam consequuntur eos deserunt iure, fugit accusantium sed molestiae odit nam totam sapiente ducimus nisi est laudantium quo pariatur. Corrupti voluptatum dolorem vitae mollitia facilis? Neque.'  

  return (
    <div className="App">  
      <NavBar/>
      <ItemListContainer textoGenerico ={texto}/>
    </div>
  );
}

export default App;
