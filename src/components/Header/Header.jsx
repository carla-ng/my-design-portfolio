//import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header id="header">
            <nav>
                <ul>
                    {/*
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    */}
                    <li>
                        <span>Proyectos</span>
                    </li>
                    <li>
                        <span>Sobre mí</span>
                    </li>
                    <li>
                        <span>Contacto</span>
                    </li>
                    <li>
                        <span>ES</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
