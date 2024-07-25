import './About.css';

import DrawingOne from '../../assets/images/about/dibujo01.jpg';
import DrawingTwo from '../../assets/images/about/dibujo02.jpg';
import DrawingThree from '../../assets/images/about/dibujo03.jpg';
import DrawingFour from '../../assets/images/about/dibujo04.jpg';
import DrawingFive from '../../assets/images/about/dibujo05.jpg';
import DrawingSix from '../../assets/images/about/dibujo06.jpg';

import useFadeIn from '../../hooks/useFadeIn';


const About = () => {
    const fadeInClass = useFadeIn()

    return (
        <div id="about" className="page">

            <div className="introduction">
                <h1 className="introduction__title">
                    <span>Quién Soy:</span>
                    <span>Ingeniera y Creativa</span>
                </h1>
            </div>

            <div className="about-container">
                <p className={`about__text ${fadeInClass}`}>
                    Soy ingeniera informática especializada en desarrollo web, con un fuerte enfoque en frontend. Mi creatividad y pasión por el diseño visual me han llevado a trabajar estrechamente con diseñadores UX/UI a lo largo de mi carrera. Esta colaboración me hizo descubrir mi interés por el diseño de experiencias de usuario, y he aprendido mucho de mis colegas en el campo.
                </p>

                <p className={`about__text ${fadeInClass}`}>
                    Desde mis días en la universidad, siempre asumí la responsabilidad de diseñar cuando era necesario, lo que me permitió desarrollar habilidades que he aplicado en mi trayectoria profesional. En mi último trabajo, tuve la oportunidad de crear algunos diseños cuando el equipo lo requería, lo cual reafirmó mi deseo de seguir creciendo en esta área.
                </p>
 
                <p className={`about__text ${fadeInClass}`}>
                    Además de mi carrera profesional, tengo una gran afición por el dibujo y la pintura. Pronto comenzaré un Máster en Concept Art para profundizar en esta pasión. Participo activamente en varios grupos de dibujo en Madrid, donde resido actualmente, y he tenido la oportunidad de exhibir mi trabajo en exposiciones colectivas en centros culturales. Entre mis hobbies también se incluyen la lectura y los videojuegos, que me permiten explorar diferentes formas de narrativas visuales y diseño interactivo. Estoy entusiasmada por continuar mi desarrollo en el diseño UX/UI y combinar mis habilidades técnicas y creativas para crear experiencias de usuario excepcionales.
                </p>

                <br/>

                <p className={`about__text ${fadeInClass}`}>
                    Aquí puedes ver algunos de mis dibujos:
                </p>
                
                <div className={`about__images ${fadeInClass}`}>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingOne})`}}></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingFour})`}}></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingThree})`}}></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingTwo})`}}></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingFive})`}}></div>
                    <div className="about__images-img" style={{backgroundImage: `url(${DrawingSix})`}}></div>
                </div>
            </div>
        </div>
    );
};

export default About;