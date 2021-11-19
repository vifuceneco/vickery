import { NavBar } from './components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductGrid from './components/ProductGrid/ProductGrid';
import { PRODUCTS } from './defaults';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/products" element={<ProductGrid items={PRODUCTS} />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
