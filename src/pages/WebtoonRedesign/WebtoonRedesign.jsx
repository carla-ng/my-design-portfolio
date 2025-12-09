import { useEffect } from 'react';

import './WebtoonRedesign.css';
import useFadeIn from '../../hooks/useFadeIn';

import ReferencesImg from '../../assets/images/videogame-interface/references.jpg';
import UIImg01 from '../../assets/images/videogame-interface/ui01.jpg';
import UIImg02 from '../../assets/images/videogame-interface/ui02.jpg';
import UIImg03 from '../../assets/images/videogame-interface/ui03.jpg';
import UIVideoPreview from '../../assets/images/videogame-interface/uivideoPreview.jpg';
import UIVideo from '../../assets/images/videogame-interface/uivideo.mp4';
import FinalImg from '../../assets/images/videogame-interface/finalImg.jpg';


const WebtoonRedesign = () => {
    const fadeInClass = useFadeIn()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section id="webtoon-redesign" className="page">

            <header className="introduction-outer-container">
                <div className="introduction">
                    <h1 className="introduction__title">
                        <span>Caso de Estudio: Rediseño UX/UI de la app de Webtoon</span>
                    </h1>
                    <p className={`introduction__text ${fadeInClass}`}>
                        <i>Webtoon</i> es una de las plataformas de cómics digitales más populares del mundo, con millones de usuarios que leen contenido diariamente. Sin embargo, a pesar de su éxito, la aplicación presenta varias oportunidades de mejora en aspectos clave como la navegación, la organización de la información, la personalización y la claridad visual.
                    </p> 

                    <p className={`introduction__text ${fadeInClass}`}>
                        Este proyecto es un <span className="highlighted-text">rediseño UX/UI focalizado</span>, en el que analizo y optimizo algunas de las áreas que generan mayor fricción para los usuarios. El objetivo no es reconstruir <i>Webtoon</i> desde cero, sino <span className="highlighted-text">mejorar las secciones donde la experiencia actual resulta confusa, limitada o poco intuitiva</span>, y proponer nuevas funcionalidades que aporten valor real.
                    </p>
                </div>
            </header>            

            <section className={`webtoon-redesign-container ${fadeInClass}`}>

                <article className="webtoon-redesign__block intro" aria-labelledby="introduction-context">
                    <h4 id="introduction-context">Áreas de enfoque del rediseño</h4>

                    <p>
                        El proyecto se centra en cuatro áreas fundamentales:
                    </p>

                    <ul>
                        <li><b>Home:</b> actualmente saturada y visualmente desorganizada.</li>
                        <li><b>Menú de navegación inferior:</b> jerarquía poco clara y categorías con poca coherencia.</li>
                        <li><b>My Series / Biblioteca del usuario:</b> limitada, sin opciones de clasificación o listas personalizadas.</li>
                        <li><b>Página principal de un webtoon:</b> información dispersa y navegación entre episodios mejorable.</li>
                    </ul>

                    <p>Además, según la evolución del proyecto, incluiré mejoras adicionales en áreas como la sección de <b>comentarios</b> o la <b>página de búsqueda</b>, que también presentan oportunidades claras de optimización.</p>

                    <p>Este es un proyecto <b>personal</b>, desarrollado siguiendo el marco del <b>Doble Diamante</b>, con fases de investigación, análisis heurístico, definición del problema, ideación, wireframing y diseño UI final. A lo largo del case study expongo las decisiones de diseño, los problemas detectados y las soluciones planteadas, combinando una perspectiva tanto <b>UX</b> como <b>UI</b>.</p>

                    <ul>
                        <li><b>Rol:</b> UX/UI Designer — Research, análisis heurístico, definición del problema, ideación, arquitectura de información, flujos, wireframes, diseño visual y prototipo.</li>
                        <li><b>Tipo de proyecto:</b> Proyecto personal (en proceso).</li>
                        <li><b>Motivación:</b> Elegí Webtoon como caso de estudio porque, como usuaria habitual, he experimentado directamente las limitaciones de la app actual y vi una oportunidad ideal para proponer una experiencia más clara, personalizada y centrada en el usuario.</li>
                    </ul>
                </article>

            {/*
                <article className="videogame-interface__block investigation" aria-labelledby="research-analysis">
                    <h4 id="research-analysis">Referencias</h4>
                    <p>
                        Antes de comenzar con el diseño de la interfaz y otros elementos del juego, nos centramos en desarrollar más a fondo el lore y en definir la <span className="highlighted-text grey">dirección estética</span> que queríamos seguir. Para ello, realizamos una investigación visual y creamos un <span className="highlighted-text grey">mood board</span>, lo que nos ayudó a tener una referencia clara y coherente del estilo que queríamos transmitir.
                    </p>

                    <figure className="middle-img moodboard">
                        <img src={ ReferencesImg } alt="Mood board para el diseño del juego" />
                    </figure>
                </article>

                <article className="videogame-interface__block lookandfeel" aria-labelledby="lookandfeel-info-navigation">
                    <h4 id="lookandfeel-info-navigation">Look & Feel</h4>
                    <p>
                        Para acompañar la <span className="highlighted-text grey">estética victoriana</span> del juego, elegí dos tipografías que ayudaran a reforzar ese estilo: <i>Vollkorn SC</i> para los títulos, por su aspecto clásico y con carácter, y <i>Crimson Text</i> para el resto de los textos, por su claridad y su toque elegante. Ambas recuerdan a los <span className="highlighted-text grey">libros antiguos</span>, algo que encajaba muy bien con una de las ideas principales del proyecto.
                    </p>

                    <p>
                        En el juego, el personaje principal lleva un libro antiguo donde guarda toda la información importante: los objetos que ha encontrado, la gente que ha conocido y el progreso general. Dentro de este libro, los ítems aparecen en forma de <span className="highlighted-text grey">cartas ilustradas</span>, como la que diseñé para la llave del estudio de la vampira. También incluí ejemplos de la interfaz de salud del personaje, adaptada a ambos protagonistas.
                    </p>

                    <figure className="middle-img ui-one">
                        <img src={ UIImg01 } alt="Items, barra de salud y fuentes para la UI" />
                    </figure>
                </article>

                <article className="videogame-interface__block screens" aria-labelledby="screens-process">
                    <h4 id="screens-process">Pantallas</h4>

                    <p>
                        En esta parte del proyecto también trabajé en propuestas de diseño para varias pantallas del juego, como las de <span className="highlighted-text grey">carga, pausa y ajustes (settings)</span>. Para las de carga, opté por un fondo negro con <span className="highlighted-text grey">telarañas</span>, manteniendo el ambiente oscuro y misterioso. En el caso de las pantallas de pausa, probé dos enfoques: una versión que sigue el estilo de las de carga, y otras que incorporan detalles en papel de pergamino, para seguir con la <span className="highlighted-text grey">estética de libro antiguo</span>. La pantalla de ajustes también sigue esta línea, con una interfaz en papel envejecido y marcapáginas tipo cintas, reforzando la idea de que todos los menús forman parte del mismo objeto dentro del mundo del juego.
                    </p>

                    <figure className="middle-img screens-img">
                        <img src={ UIImg02 } alt="Propuestas de diseño para pantallas del juego" />
                    </figure>
                </article>

                <article className="videogame-interface__block splashart" aria-labelledby="splashart-process">
                    <h4 id="splashart-process">Splash Art y Vídeo de Inicio</h4>

                    <p>
                        Como parte final del proyecto, todo el equipo colaboró en la creación de una ilustración tipo splash art que serviría como fondo para la pantalla de inicio del juego. Cada persona del grupo se encargó de una fase del proceso: desde los thumbnails y el boceto, hasta el lineart, el color y el render final con luces y sombras. En mi caso, <span className="highlighted-text grey">trabajé en la fase de color</span>, para la cual propuse cuatro paletas distintas: una en tonos rojos, verdes y grises; otra en rojos, marrones y beige; una con azules y amarillo; y una última en morados con amarillo. Hice pruebas con varias de ellas y finalmente nos decidimos por la paleta morada, con algunos ajustes para adaptarla mejor a la escena.
                    </p>

                    <figure className="middle-img splashart">
                        <img src={ UIImg03 } alt="Colores para el splash art de la pantalla de inicio" />
                    </figure>

                    <p>
                        Esta ilustración se utilizó como <span className="highlighted-text grey">fondo en la pantalla de inicio del juego</span>, que también aparece en el vídeo que muestro a continuación. En él se puede ver la animación donde se selecciona la opción de comenzar una nueva partida, tras lo cual se activa la pantalla de carga. Uno de los miembros del equipo se encargó de animar esta transición, cerrando así la experiencia de forma coherente con todo el universo visual del proyecto.
                    </p>

                    <div className="video-wrapper">
                        <video controls width="100%" poster={ UIVideoPreview }>
                            <source src={ UIVideo } type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>
                </article>

                <div className="videogame-interface__image" style={{backgroundImage: `url(${ FinalImg })`}}></div>

                <section className="videogame-interface__block external-link-section">
                    <h4>Mira todo mi aporte al proyecto</h4>

                    <p>
                        Si quieres ver en detalle todos los diseños que aporté al proyecto (personajes, props, etc.), puedes echarle un vistazo a mi ArtStation:
                    </p>

                    <button className="default" aria-label="Visitar web en vivo">
                        <a className="default__text" href="https://www.artstation.com/artwork/mAKRN8" target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto completo en ArtStation">
                            Ver proyecto completo
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

            */}

            </section>

        </section>
    )
};

export default WebtoonRedesign;