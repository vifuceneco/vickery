import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/Navbar'

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer saludo="Bienvenidos!"/>
    </div>
  );
}

export default App;
