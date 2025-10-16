import './About.css';

import DrawingOne from '../../assets/images/about/dibujo01.jpg';
import DrawingTwo from '../../assets/images/about/dibujo02.jpg';
import DrawingThree from '../../assets/images/about/dibujo03.jpg';
import DrawingFour from '../../assets/images/about/dibujo04.jpg';
import DrawingFive from '../../assets/images/about/dibujo05.jpg';
import DrawingSix from '../../assets/images/about/dibujo06.jpg';

import useFadeIn from '../../hooks/useFadeIn';
import { useEffect } from 'react';


const About = () => {
    const fadeInClass = useFadeIn()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section id="about" className="page">

            <header className="introduction">
                <h1 className="introduction__title">
                    <span>Quién Soy:</span>
                    <span>Ingeniera y Creativa</span>
                </h1>
            </header>

            <section className="about-container">
                <p className={`about__text ${fadeInClass}`}>
                    <strong>Soy ingeniera informática especializada en desarrollo web</strong>, con un fuerte enfoque en frontend. Mi creatividad y pasión por el diseño visual me han llevado a trabajar estrechamente con diseñadores UX/UI a lo largo de mi carrera. Esta colaboración me hizo descubrir mi interés por el diseño de experiencias de usuario, y he aprendido mucho de mis colegas en el campo.
                </p>

                <p className={`about__text ${fadeInClass}`}>
                    Desde mis días en la universidad, siempre <strong>asumí la parte visual</strong> cuando era necesario, lo que me llevó a fortalecer mis habilidades de diseño y aplicarlas en mi trabajo. En mi última etapa profesional, tuve la oportunidad de <strong>crear algunos diseños, y colaborar en la validación de interfaces</strong>, lo que reafirmó mi deseo de seguir creciendo en el ámbito del diseño digital.
                </p>
 
                <p className={`about__text ${fadeInClass}`}>
                    Además de mi carrera profesional, tengo una gran <strong>afición por el dibujo y la pintura</strong>. Recientemente completé un <strong>Máster en Concept Art</strong> para profundizar en mi lado más artístico. También participo en grupos de dibujo en Madrid, donde resido actualmente, y he tenido la oportunidad de exhibir mi trabajo en exposiciones colectivas en centros culturales. Entre mis hobbies también se incluyen la lectura y los videojuegos, que me permiten explorar diferentes formas de narrativas visuales y diseño interactivo. Estoy entusiasmada por seguir desarrollándome en el mundo del diseño y combinar mis habilidades técnicas y creativas para crear experiencias visuales cuidadas y significativas.
                </p>

                <br/>

                <p className={`about__text ${fadeInClass}`}>
                    Aquí puedes ver algunos de mis dibujos:
                </p>
                
                <section className={`about__images ${fadeInClass}`} aria-label="Galería de dibujos">
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingOne})`}} role="img" aria-label="Diseño de personajes oso"></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingFour})`}} role="img" aria-label="Dibujo de Pokemon Bulbasaur"></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingThree})`}} role="img" aria-label="Diseño de props extraterrestres"></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingTwo})`}} role="img" aria-label="Dibujo de elfo"></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingFive})`}} role="img" aria-label="Dibujo de ama de llaves"></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingSix})`}} role="img" aria-label="Dibujo de Daenerys Targaryen"></div>
                </section>
            </section>
        </section>
    );
};

export default About;