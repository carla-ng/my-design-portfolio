//import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFadeIn from '../../hooks/useFadeIn';
import './Header.css';

const Header = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const fadeInClass = useFadeIn()


    const toggleMenu = () => {
        if ( isOpen ) {
            setIsClosing(true)
            setHamburgerIsOpen(false)

            setTimeout(() => {
                setIsOpen(false)
                setIsClosing(false)
            }, 500); // Match this duration with CSS transition duration
        } else {
            setIsOpen(true)
            setHamburgerIsOpen(true)
        }
    }


    return (
        <header id="header" className={ fadeInClass }>
            <div className={`hamburger ${hamburgerIsOpen ? 'open' : ''}`} onClick={ toggleMenu }>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
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
