import './Footer.css';
import useFadeIn from '../../hooks/useFadeIn';

const Footer = () => {
    const fadeInClass = useFadeIn()

    return (
        <footer id="footer"  className={ fadeInClass }>
            <a className="footer__text" href="https://github.com/carla-ng">Diseñado y desarrollado por Carla Nardone</a>
        </footer>
    )
};

export default Footer;