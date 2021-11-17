import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/Navbar'
import { ItemCount } from './components/ItemCount/ItemCount'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
        <div>
        <ItemListContainer saludo="Bienvenidos!"/>,
        <ItemDetailContainer />,
        <ItemCount stock="10" />
        </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
