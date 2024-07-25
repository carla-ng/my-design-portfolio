import './Footer.css';

import useFadeIn from '../../hooks/useFadeIn';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx';


const Footer = () => {
    const fadeInClass = useFadeIn()

    return (
        <>
            <ScrollToTopButton />

            <footer id="footer"  className={ fadeInClass }>
                <a className="footer__text" href="https://github.com/carla-ng">Diseñado y desarrollado por Carla Nardone</a>
            </footer>
        </>
    )
};

export default Footer;