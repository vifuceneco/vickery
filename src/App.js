import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/Navbar'
import { ItemCount } from './components/ItemCount/ItemCount'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer saludo="Bienvenidos!"/>
    <ItemDetailContainer />
    <ItemCount stock="10" />
    </div>
  );
}

export default App;
