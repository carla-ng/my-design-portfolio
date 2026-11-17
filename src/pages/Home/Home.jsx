import './Home.css';

/*import ComingSoonImage from '../../assets/images/home/comingsoon_thumbnail.jpg';*/
import ChallengesImage from '../../assets/images/home/challenges_thumbnail.png';
import ComponentSystemImage from '../../assets/images/home/component-system_thumbnail.png';
import PersonalWebsiteImage from '../../assets/images/home/personal-website_thumbnail.png';
import WebtoonRedesignImage from '../../assets/images/home/webtoon-redesign_thumbnail.png';
import UIImage from '../../assets/images/home/ui_thumbnail.jpg';

import { useEffect } from 'react';
import useFadeIn from '../../hooks/useFadeIn';
import Card from '../../components/Card/Card.jsx';


const Home = () => {
    const fadeInClass = useFadeIn()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section id="home" className="page">

            <header className="introduction">
                <h1 className="introduction__title">
                    <span>¡Hola!</span>
                    <span>Soy Carla Nardone</span>
                </h1>
                <p className={`introduction__text ${fadeInClass}`}>
                    Después de trabajar durante varios años como <span className="highlighted-text">Desarrolladora Web</span> y colaborar de cerca con equipos de <span className="highlighted-text">Diseño</span>, descubrí mi pasión por esta área. Decidí entonces dar el paso y profundizar en ella, combinando mis habilidades técnicas con mi lado más creativo. Aquí encontrarás algunos ejemplos de mis proyectos.
                </p>
            </header>

            <section className={`projects-container ${fadeInClass}`}>
                <Card image={ ComponentSystemImage } title="Creación de Sistema escalable de Componentes" description="En mi última empresa trabajé como desarrolladora web y diseñadora UX/UI en la creación de un nuevo sistema de componentes y portales. Colaboré estrechamente con el equipo de Diseño UX/UI, aportando orientación técnica, feedback y resolviendo dudas durante el proceso. Además, participé directamente en el diseño y desarrollo de componentes y páginas web, así como en la validación de nuevos componentes y propuestas de diseño. También colaboré en la definición de proyectos y flujos de usuario." link="component-system" />

                {
                <Card image={ WebtoonRedesignImage } title="Caso de Estudio: Rediseño UX/UI de la app de Webtoon" description="Proyecto de rediseño UX/UI centrado en analizar y mejorar la experiencia de usuario de la aplicación de Webtoon. A partir de una investigación exploratoria y el análisis de la interfaz, identifiqué oportunidades de mejora en la navegación, la home, la biblioteca y las funciones de búsqueda y descubrimiento de contenido. El proyecto incluye la definición de problemas de usabilidad, la exploración de soluciones y el diseño de nuevas propuestas de interfaz y funcionalidades orientadas a ofrecer una experiencia más intuitiva, organizada y personalizada." link="webtoon-redesign" ariaHiddenValue="true" roleValue="presentation" />
                }

                <Card image={ ChallengesImage } title="Retos de Diseño UX/UI" description="Exploración de diversos retos en línea centrados en la creación de componentes y páginas web. Cada proyecto incluye el proceso completo: sketch, wireframe y mockup final, demostrando mi habilidad para transformar ideas en diseños funcionales y estéticamente atractivos." link="challenges" additionalClass="challenges" />

                <Card image={ PersonalWebsiteImage } title="Caso de Estudio: Diseño y Desarrollo de mi Web Personal" description="Un análisis detallado del diseño y desarrollo de mi antiguo portfolio como desarrolladora web. Este proyecto destaca mis habilidades como programadora, desde la conceptualización y el diseño UX/UI hasta la implementación técnica. Descubre cómo combiné creatividad y código para crear una experiencia de usuario fluida y profesional." link="personal-website" />

                <Card image={ UIImage } title="Diseño de Interfaz de Videojuego" description="Como parte de un proyecto colaborativo en mi Máster en Concept Art, trabajé en el diseño de una pequeña interfaz para el videojuego ficticio &quot;When the Night Falls&quot;. Esta tarea formó parte del desarrollo de concept art, donde buscamos alinear la experiencia del usuario con la narrativa y estética del juego." link="videogame-interface" />
                
            </section>
            
        </section>
    );
};

export default Home;
