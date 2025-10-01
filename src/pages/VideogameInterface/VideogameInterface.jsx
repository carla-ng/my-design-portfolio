import { useEffect } from 'react';

import './VideogameInterface.css';
import useFadeIn from '../../hooks/useFadeIn';

import ReferencesImg from '../../assets/images/videogame-interface/references.jpg';
import UIImg01 from '../../assets/images/videogame-interface/ui01.jpg';
import UIImg02 from '../../assets/images/videogame-interface/ui02.jpg';
import UIImg03 from '../../assets/images/videogame-interface/ui03.jpg';
import UIVideoPreview from '../../assets/images/videogame-interface/uivideoPreview.jpg';
import UIVideo from '../../assets/images/videogame-interface/uivideo.mp4';
import FinalImg from '../../assets/images/videogame-interface/finalImg.jpg';


const VideogameInterface = () => {
    const fadeInClass = useFadeIn()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section id="videogame-interface" className="page">

            <header className="introduction-outer-container">
                <div className="introduction">
                    <h1 className="introduction__title">
                        <span>Diseño de Interfaz de Videojuego</span>
                    </h1>
                    <p className={`introduction__text ${fadeInClass}`}>
                        Este proyecto forma parte de una colaboración dentro de mi Máster en Concept Art, en la que <span className="highlighted-text">desarrollamos el universo visual de un videojuego</span> ficticio titulado &quot;<i>When the Night Falls</i>&quot;. Una de mis contribuciones fue el diseño de una interfaz de usuario que encajara con la ambientación y el estilo artístico general del juego. El objetivo era crear una UI clara y funcional, que a la vez se sintiera parte del mundo que habíamos creado. Para ello, trabajé teniendo en cuenta tanto la experiencia del jugador como la estética general del proyecto, colaborando con el resto del equipo para asegurar que el diseño funcionara bien dentro del conjunto.
                    </p>
                </div>
            </header>            

            <section className={`videogame-interface-container ${fadeInClass}`}>

                <article className="videogame-interface__block intro" aria-labelledby="introduction-context">
                    <h4 id="introduction-context">Resumen del juego</h4>

                    <p>
                        En este videojuego de terror, un niño huérfano (o niña, según lo elija el jugador) es enviado a vivir a la mansión de su siniestra tía. Al caer la noche, descubre que las habitaciones cambian de lugar, el personal de la mansión se transforma en enemigos, y la casa se convierte en el terreno de caza perfecto para la verdadera forma de su tía: una vampira con forma de araña que no se detendrá ante nada hasta atraparlo. El huérfano deberá sobrevivir cada noche y resolver puzzles para obtener las llaves que bloquean las habitaciones de la mansión, las cuales serán clave para derrotar a la vampira.
                    </p>
                </article>

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
                        <a className="default__text" href="https://www.artstation.com/artwork/mAKRN8" target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto en ArtStation">
                            Ver proyecto en ArtStation
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

export default VideogameInterface;