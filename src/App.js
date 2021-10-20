import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/Navbar'
import { ItemCount } from './components/ItemCount/ItemCount'

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer saludo="Bienvenidos!"/>
    <ItemCount stock="10" />
    </div>
  );
}

export default App;
