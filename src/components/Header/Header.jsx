//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            }, 500); // match this duration with CSS transition duration
        } else {
            setIsOpen(true)
            setHamburgerIsOpen(true)
        }
    }


    useEffect(() => {
        if ( isOpen ) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);


    return (
        <header id="header" className={ fadeInClass }>
            <div className={`hamburger ${hamburgerIsOpen ? 'open' : ''}`} onClick={ toggleMenu }>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={ toggleMenu }>Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={ toggleMenu }>Sobre mí</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={ toggleMenu }>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
