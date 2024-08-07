import { useEffect } from 'react';

import './PersonalWebsite.css';
import useFadeIn from '../../hooks/useFadeIn';

import MoodBoardImg from '../../assets/images/personal-website/moodboard.jpg';
import CSSArtImg from '../../assets/images/personal-website/cssart.jpg';
import SitemapImg from '../../assets/images/personal-website/sitemap.jpg';
import SketchesImg from '../../assets/images/personal-website/sketches.jpg';
import WireframesImg from '../../assets/images/personal-website/wireframes.jpg';
import MockupsImg from '../../assets/images/personal-website/mockups.jpg';
import StyleGuideImg from '../../assets/images/personal-website/styleguide.jpg';
import LighthouseImg from '../../assets/images/personal-website/lighthouse.jpg';
import ScreenshotsImg from '../../assets/images/personal-website/screenshots.jpg';


const PersonalWebsite = () => {
    const fadeInClass = useFadeIn()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section id="personal-website" className="page">

            <header className="introduction-outer-container">
                <div className="introduction">
                    <h1 className="introduction__title">
                        <span>Caso de Estudio: Diseño y Desarrollo de mi Web Personal</span>
                    </h1>
                    <p className={`introduction__text ${fadeInClass}`}>
                        En esta página, te presento el caso de estudio detallado de la <span className="highlighted-text">creación de mi portafolio como desarrolladora web</span>. A través de este proyecto, no solo desarrollé una plataforma para mostrar mis habilidades técnicas, sino que también apliqué principios de diseño UX/UI para crear una experiencia de usuario intuitiva y visualmente atractiva. Descubre cómo abordé el proceso de diseño y desarrollo, los desafíos encontrados, y las soluciones implementadas para crear una presencia online efectiva y coherente.
                    </p>
                </div>
            </header>            

            <section className={`personal-website-container ${fadeInClass}`}>

                <article className="personal-website__block intro" aria-labelledby="introduction-context">
                    <h4 id="introduction-context">Introducción y Contexto</h4>

                    <p>
                        El propósito de crear este portafolio web fue establecer una presencia en línea sólida y profesional, que no sólo demostrara mis habilidades técnicas y creativas en desarrollo web y diseño UX/UI, sino que también me abriera puertas a nuevas oportunidades laborales. Este sitio web actúa como una tarjeta de presentación digital, proporcionando una visión integral de mi trayectoria, proyectos destacados y experiencia. Está especialmente dirigido a colegas de la industria y reclutadores, con el objetivo de conectar con profesionales afines y potenciales empleadores en el sector tecnológico.
                    </p>
                </article>

                <article className="personal-website__block investigation" aria-labelledby="research-analysis">
                    <h4 id="research-analysis">Investigación y Análisis</h4>
                    <p>
                        Para diseñar y estructurar mi portafolio web, realicé un análisis exhaustivo de otros portafolios de desarrolladores y diseñadores. Este proceso de análisis competitivo me ayudó a identificar buenas prácticas y áreas de mejora, asegurando que mi portafolio fuera tanto funcional como atractivo.
                    </p>

                    <figure className="middle-img moodboard">
                        <img src={ MoodBoardImg } alt="Mood board para el diseño de la web" />
                    </figure>

                    <p>
                        Decidí no seguir la tendencia actual de diseños minimalistas y de una sola página con scroll continuo, ya que <span className="highlighted-text pink">quería que mi sitio reflejara mi personalidad y estilo únicos</span>. Me inspiré en las antiguas ventanas de los sistemas operativos <span className="highlighted-text pink">Windows de los 90s</span> y en elementos de <span className="highlighted-text pink">videojuegos vintage</span>, utilizando una <span className="highlighted-text pink">paleta de colores pastel</span>, especialmente en tonos rosados, que son mis favoritos. Además, quise incorporar imágenes relacionadas con la programación y, para mantener la cohesión visual, las creé utilizando CSS, destacando mi habilidad tanto en diseño como en desarrollo.
                    </p>

                    <figure className="bottom-img cssart">
                        <img src={ CSSArtImg } alt="Ejemplos de arte CSS hecho para la web" />
                    </figure>
                </article>

                <article className="personal-website__block architecture" aria-labelledby="architecture-info-navigation">
                    <h4 id="architecture-info-navigation">Arquitectura de Información y Navegación</h4>
                    <p>
                        Con el fin de asegurar una experiencia de usuario fluida y coherente, elaboré un esquema visual detallado de la estructura de mi sitio web, destacando las páginas principales y sus secciones.
                    </p>

                    <figure className="middle-img sitemap">
                        <img src={ SitemapImg } alt="Mapa de la web" />
                    </figure>

                    <p>
                        La navegación del sitio se organiza en torno a cuatro secciones clave: 
                    </p>

                    <ul>
                        <li>
                            <strong>Home</strong>:
                            ofrece una breve bienvenida e introducción
                        </li>
                        <li>
                            <strong>Acerca de mí</strong>:
                            donde comparto detalles más personales y mis intereses
                        </li>
                        <li>
                            <strong>Currículum</strong>:
                            proporciona un resumen de mis estudios, experiencias laborales, cursos y habilidades tecnológicas
                        </li>
                        <li>
                            <strong>Portafolio</strong>:
                            donde se presentan demostraciones de mis proyectos personales y profesionales
                        </li>
                        <li>
                            <strong>Contacto</strong>:
                            incluye enlaces a mis redes sociales
                        </li>
                    </ul>

                    <p>
                        Los flujos de usuario están diseñados para facilitar el acceso rápido y directo a la información relevante en cada sección, permitiendo a los visitantes explorar mi trayectoria y habilidades con facilidad.
                    </p>
                </article>

                <article className="personal-website__block design" aria-labelledby="design-process">
                    <h4 id="design-process">Proceso de Diseño</h4>

                    <p>
                        A través de las siguientes imágenes, podrás ver la evolución de las ideas y cómo cada etapa contribuyó a la creación del producto final.
                    </p>

                    <p>
                        Los <span className="highlighted-text green">bocetos iniciales</span> o <span className="highlighted-text green">sketches</span> representan las ideas crudas y la estructura básica de las páginas y elementos del sitio.
                    </p>

                    <figure className="middle-img sketches">
                        <img src={ SketchesImg } alt="Bocetos del diseño de la web" />
                    </figure>

                    <p>
                        Los <span className="highlighted-text green">wireframes</span> muestran una versión más detallada de la estructura del sitio, destacando la disposición y jerarquía de los elementos sin distracciones visuales.
                    </p>

                    <figure className="middle-img wireframes">
                        <img src={ WireframesImg } alt="Wireframes del diseño de la web" />
                    </figure>

                    <p>
                        Los <span className="highlighted-text green">mockups</span> presentan el diseño más cercano al producto final, incorporando colores, tipografía y otros elementos visuales.
                    </p>

                    <figure className="middle-img mockups">
                        <img src={ MockupsImg } alt="Mockups del diseño de la web" />
                    </figure>

                    <p>
                        Esta siguiente imagen propone una <span className="highlighted-text green">guía de estilo</span> que define la identidad visual del portafolio, incluyendo la paleta de colores, la tipografía y los elementos visuales inspirados en las ventanas de Windows de los 90s y videojuegos vintage. Esta sección refleja cómo estas elecciones se alinean con mi personalidad y la marca que deseo proyectar, lo que para mí ha sido una de las partes más importantes de este proyecto.
                    </p>

                    <figure className="bottom-img styleguide">
                        <img src={ StyleGuideImg } alt="Guia de estilos del diseño de la web" />
                    </figure>
                </article>

                <article className="personal-website__block development" aria-labelledby="development-process">
                    <h4 id="development-process">Desarrollo e Implementación</h4>

                    <p>
                        Utilicé diversas tecnologías y herramientas para garantizar un desarrollo eficiente y una experiencia de usuario óptima. El proyecto fue desarrollado principalmente con <span className="highlighted-text yellow">Vue 3</span> junto con <span className="highlighted-text yellow">JavaScript</span> y <span className="highlighted-text yellow">Webpack</span>, lo cual me permitió practicar y afianzar mis habilidades en este framework. Para el diseño y estilización, empleé <span className="highlighted-text yellow">SCSS</span>, lo que facilitó una gestión más organizada y modular de los estilos. Finalmente, desplegué el sitio en <span className="highlighted-text yellow">Netlify</span>, utilizando <span className="highlighted-text yellow">GitHub</span> como repositorio para el control de versiones. Netlify simplificó el proceso de hosting y permitió una fácil administración y despliegue automático de las nuevas versiones del proyecto directamente desde GitHub.
                    </p>
                </article>

                <article className="personal-website__block content" aria-labelledby="content-seo-accessibility">
                    <h4 id="content-seo-accessibility">Contenido, SEO y Accesibilidad</h4>

                    <p>
                        Durante la creación del contenido para mi sitio web, presté especial atención a la redacción clara y concisa de cada página. Las imágenes utilizadas fueron optimizadas y convertidas al formato .webp, lo que ofrece ventajas significativas en términos de velocidad de carga y eficiencia en el uso del ancho de banda, mejorando así la experiencia del usuario.
                    </p>

                    <p>
                        Para optimizar el sitio para motores de búsqueda, implementé una estrategia básica de SEO que incluyó el uso de etiquetas meta, títulos descriptivos, y una estructura de enlaces internos coherente. 
                    </p>

                    <p>
                        En términos de accesibilidad, me documenté a fondo y apliqué principios de diseño inclusivo. Utilicé HTML semántico para estructurar correctamente el contenido y añadí atributos como &quot;aria-&quot; para mejorar la navegación y la comprensión del sitio para personas con discapacidades. Esto asegura que el sitio web sea accesible para todos los usuarios, independientemente de sus habilidades o dispositivos utilizados.
                    </p>
                </article>
                
                <article className="personal-website__block tests" aria-labelledby="tests-feedback">
                    <h4 id="tests-feedback">Pruebas y Retroalimentación</h4>
                    <p>
                        Para asegurar la calidad y el rendimiento de mi sitio web, utilicé herramientas como <span className="highlighted-text yellow">Lighthouse</span> y <span className="highlighted-text yellow">BrowserStack</span> para realizar una serie de pruebas exhaustivas. Estas pruebas evaluaron aspectos clave como accesibilidad, rendimiento, SEO, y buenas prácticas generales, además de verificar la compatibilidad del sitio en diversos dispositivos y sistemas operativos. A partir de los resultados obtenidos, implementé una serie de mejoras recomendadas, optimizando la velocidad de carga, la accesibilidad y el posicionamiento en motores de búsqueda.
                    </p>

                    <figure className="middle-img lighthouse">
                        <img src={ LighthouseImg } alt="Resultados de Lighthouse" />
                    </figure>

                    <p>
                        Además, compartí el sitio con colegas tanto del área de desarrollo web y diseño como con personas ajenas al campo, con el fin de obtener una variedad de perspectivas y comentarios. Esta retroalimentación fue invaluable para identificar áreas de mejora y refinar la experiencia del usuario. 
                    </p>
                </article>

                <article className="personal-website__block conclusions" aria-labelledby="conclusions">
                    <h4 id="conclusions">
                        <span className="emoji">&#10024;</span>
                        Conclusión y Reflexión
                        <span className="emoji">&#10024;</span>
                    </h4>

                    <p>
                        El proceso de creación de este portafolio ha sido una experiencia invaluable, tanto a nivel técnico como de diseño. A lo largo del proyecto, consolidé mis habilidades en el uso de tecnologías como Vue3, SCSS y herramientas de despliegue como Netlify. También profundicé en la importancia del SEO, la accesibilidad y el diseño centrado en el usuario, aplicando principios de diseño visual y técnico para crear una experiencia web coherente y atractiva.
                    </p>

                    <p>
                        En cuanto a los próximos pasos, mi objetivo principal es mantener el portafolio actualizado con la última información sobre mis proyectos, experiencias laborales, y cursos completados. Además, planeo seguir mejorando el sitio con nuevas funcionalidades y mejoras basadas en las últimas tendencias y tecnologías del desarrollo web. Este portafolio es un reflejo de mi evolución profesional y continuará creciendo y adaptándose a medida que adquiera nuevas habilidades y conocimientos.
                    </p>
                </article>

                <div className="personal-website__image" style={{backgroundImage: `url(${ ScreenshotsImg })`}}></div>

                <section className="personal-website__block external-link-section">
                    <h4>Descubre mi sitio de desarrollo web en acción</h4>

                    <p>
                        Explora el sitio completo en vivo:
                    </p>

                    <button className="default" aria-label="Visitar web en vivo">
                        <a className="default__text" href="https://carla-nardone.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Visita la web">
                            Visita la web
                            <svg className="default__icon right" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g>
                                        <rect width="25" height="25" transform="rotate(180 12 12)" opacity="0"/>
                                        <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </button>
                </section>

            </section>

        </section>
    )
};

export default PersonalWebsite;