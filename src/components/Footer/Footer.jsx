import './Footer.css';

import useFadeIn from '../../hooks/useFadeIn';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx';


const Footer = () => {
    const fadeInClass = useFadeIn()

    return (
        <>
            <ScrollToTopButton />

            <footer id="footer" className={ fadeInClass }>
                <span className="footer__text">Diseñado y desarrollado por Carla Nardone</span>
            </footer>
        </>
    )
};

export default Footer;