import { CarWidget } from '../CarWidget/CarWidget'
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className="Header">
            <div className="NavBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Recetas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <> <CarWidget />
            </>
        </div>
        
    )
}