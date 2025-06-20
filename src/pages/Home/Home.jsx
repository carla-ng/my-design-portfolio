import './Home.css';

import ComingSoonImage from '../../assets/images/home/comingsoon_thumbnail.jpg';
import ChallengesImage from '../../assets/images/home/challenges_thumbnail.png';
import ComponentSystemImage from '../../assets/images/home/component-system_thumbnail.png';
import PersonalWebsiteImage from '../../assets/images/home/personal-website_thumbnail.png';

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
                    Después de trabajar como <span className="highlighted-text">Desarrolladora Web</span> durante años y colaborar estrechamente con Diseñadores, descubrí mi pasión por el <span className="highlighted-text">Diseño UX/UI</span>. Fue así como decidí explorar este campo para combinar mis habilidades técnicas y creativas{/*, ofreciendo experiencias de usuario excepcionales*/}. Aquí encontrarás algunos ejemplos de mis proyectos.
                </p>
            </header>

            <section className={`projects-container ${fadeInClass}`}>
                <Card image={ ComponentSystemImage } title="Sistema de Componentes" description="En mi última empresa trabajé como desarrolladora web y ocasional diseñadora UX/UI en un proyecto de creación de un nuevo sistema de componentes y portales. Colaboré estrechamente con el equipo de diseño UX/UI: guiando, proporcionando feedback y resolviendo dudas. Una vez creado el sistema, diseñé en ocasiones componentes adicionales y algunas páginas web, además validé los nuevos componentes y diseños web propuestos por los diseñadores." link="component-system" />

                <Card image={ ChallengesImage } title="Retos de Diseño UX/UI" description="Exploración de diversos retos en línea centrados en la creación de componentes y páginas web. Cada proyecto incluye el proceso completo: sketch, wireframe y mockup final, demostrando mi habilidad para transformar ideas en diseños funcionales y estéticamente atractivos." link="challenges" additionalClass="challenges" />

                <Card image={ PersonalWebsiteImage } title="Caso de Estudio: Diseño y Desarrollo de mi Web Personal" description="Un análisis detallado del diseño y desarrollo de mi portafolio como desarrolladora web. Este proyecto destaca mis habilidades como programadora, desde la conceptualización y el diseño UX/UI hasta la implementación técnica. Descubre cómo combiné creatividad y código para crear una experiencia de usuario fluida y profesional." link="personal-website" />

                {/*
                <Card image={ ComingSoonImage } title="Caso de Estudio: WebApp para Artistas" description="Proceso creativo y técnico detrás de una innovadora webapp diseñada para artistas que se dedican a la pintura y el dibujo. Esta plataforma incluirá información sobre eventos artísticos, un listado de tiendas de bellas artes, técnicas y consejos útiles, entre otros. Aprovechando un grupo local de artistas para investigación UX, me aseguraré de que la aplicación logre satisfacer las necesidades reales de la comunidad." link="" additionalClass="comingsoon" ariaHiddenValue="true" roleValue="presentation" />
                */}
                
            </section>
            
        </section>
    );
};

export default Home;
