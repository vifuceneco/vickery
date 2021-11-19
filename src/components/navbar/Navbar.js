import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.scss';

export const NavBar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Productos</NavLink>
                    <NavLink to="/recipes">Recetas</NavLink>
                    <NavLink to="/contact">Contacto</NavLink>
                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}