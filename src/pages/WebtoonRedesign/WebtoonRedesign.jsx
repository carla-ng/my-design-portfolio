import { useEffect, useRef, useState } from 'react';

import './WebtoonRedesign.css';
import useFadeIn from '../../hooks/useFadeIn';

import HomeAnalysis from '../../assets/images/webtoon-redesign/webtoon-home_analysis.jpg';
import HomeSketch from '../../assets/images/webtoon-redesign/webtoon-home_sketch.jpg';
import HomeWireframe from '../../assets/images/webtoon-redesign/webtoon-home_wireframe.jpg';


const WebtoonRedesign = () => {
    const fadeInClass = useFadeIn()
    const previousScrollRef = useRef({})
    const [expanded, setExpanded] = useState({})


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleExpand = (id) => {
        // guardar pos actual
        previousScrollRef.current[id] = window.scrollY

        setExpanded(prev => ({
            ...prev,
            [id]: true
        }))
    }

    const handleCollapse = (id) => {
        setExpanded(prev => ({
            ...prev,
            [id]: false
        }))

        window.scrollTo({
            top: previousScrollRef.current[id],
            behavior: "auto"
        })
    }

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

                <article className="webtoon-redesign__block overview" aria-labelledby="overview-card">
                    <h4 id="overview-card">Ficha del proyecto</h4>

                    <div id="overview-card__container">
                        <div id="overview-card__list">
                            <p><b>Tipo de proyecto:</b> Proyecto personal (<i>en proceso</i>)</p>
                            <p><b>Rol:</b> UX/UI Designer</p>
                            <p><b>Año:</b> 2026</p>
                            <p><b>Alcance:</b> Rediseño UX/UI focalizado (Home, navegación, biblioteca del usuario y página de un webtoon)</p>
                            <p><b>Metodología:</b> Doble Diamante</p>
                        </div>

                        <div id="overview-card__motivation">
                            <p><b>Motivación</b></p>
                            <p>
                                Elegí Webtoon como caso de estudio porque, como usuaria habitual, he experimentado directamente las limitaciones de la app actual y vi una oportunidad ideal para proponer una experiencia más clara, personalizada y centrada en el usuario.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="webtoon-redesign__block planning" aria-labelledby="redesign-planning">
                    <h4 id="redesign-planning">Áreas de enfoque del rediseño</h4>

                    <p>
                        El proyecto se centra en cuatro áreas fundamentales:
                    </p>

                    <ul>
                        <li><b>Home:</b> actualmente saturada y visualmente desorganizada.</li>
                        <li><b>Menú de navegación inferior:</b> jerarquía poco clara y categorías con poca coherencia.</li>
                        <li><b>My Series / Biblioteca del usuario:</b> limitada, sin opciones de clasificación o listas personalizadas.</li>
                        <li><b>Página principal de un webtoon:</b> información dispersa y navegación entre episodios mejorable.</li>
                    </ul>

                    <p>
                        Además, según la evolución del proyecto, incluiré mejoras adicionales en áreas como la sección de <b>comentarios</b> o la <b>página de búsqueda</b>, que también presentan oportunidades claras de optimización.
                    </p>
                </article>

                <article className="webtoon-redesign__block home-section" aria-labelledby="home-section">
                    <h3 id="home-section" className="webtoon-heading">Home</h3>

                    <div className="home-context">
                        <h4 className="dark-title">Contexto</h4>

                        <p>
                            La Home actúa como punto principal de entrada en Webtoon y concentra tanto la continuidad de lectura como el descubrimiento de nuevo contenido. Su correcta jerarquización es clave para que los usuarios puedan decidir rápidamente qué leer sin sentirse abrumados.
                        </p>
                    </div>

                    <div className="home-investigation">
                        <h4 className="dark-title">Investigación exploratoria</h4>

                        <p>
                            Para identificar oportunidades de mejora en Webtoon, combiné mi experiencia como usuaria habitual con opiniones de otros lectores y comentarios compartidos en comunidades online, incluyendo Reddit y las secciones de comentarios de los webtoons.
                        </p>
                        <p>
                            Esta exploración inicial me permitió recoger diferentes perspectivas sobre la experiencia de lectura, la navegación, el descubrimiento de contenido y la organización de la biblioteca. Estas observaciones, junto con el siguiente análisis de la interfaz actual, sirvieron como punto de partida para identificar posibles problemas y oportunidades de mejora.
                        </p>
                        <p>Los hallazgos tienen un carácter exploratorio y no pretenden representar a toda la comunidad de usuarios de Webtoon.</p>
                    </div>

                    <div className="home-visual-analysis">
                        <h4 className="dark-title">Análisis visual</h4>

                        <p>Captura de la Home de la app de Webtoon con apuntes sobre el análisis:</p>

                        <div className="img-wrapper">

                            <div className={`img-container ${expanded[0] ? "expanded" : ""}`}>
                                <img
                                    src={HomeAnalysis}
                                    alt="Analisis de una captura de la home de webtoon"
                                    className="img-file"
                                />

                                {!expanded[0] && (
                                    <div className="fade-overlay"></div>
                                )}

                            </div>

                            {!expanded[0] && (
                                <button className="toggle-button" onClick={() => handleExpand(0)}>
                                    Ver más
                                </button>
                            )}

                            {expanded[0] && (
                                <button className="toggle-less visible" onClick={() => handleCollapse(0)}>
                                    Ver menos
                                </button>
                            )}

                        </div>

                    </div>

                    <div className="home-detected-problems">
                        <h4 className="dark-title">Problemas detectados</h4>

                        <p>
                            A partir del análisis visual de la Home y de la investigación exploratoria, se identificaron las siguientes oportunidades de mejora.
                        </p>

                        <p><u>Hallazgos del análisis visual</u></p>

                        <ul>
                            <li><b>Jerarquía visual poco definida:</b> numerosas secciones con un tratamiento visual similar.</li>
                            <li><b>Patrones de contenido repetitivos:</b> el uso recurrente de carruseles y listas horizontales dificulta distinguir algunas secciones según su propósito.</li>
                            <li><b>Diferenciación entre contenidos:</b> algunas secciones de descubrimiento presentan estructuras similares pese a tener enfoques distintos.</li>
                            <li><b>Extensión de la Home:</b> la acumulación de secciones alarga el recorrido necesario para explorar el contenido.</li>
                        </ul>

                        <p><u>Hallazgos de la investigación exploratoria</u></p>

                        <p>
                            Las opiniones recogidas de otros lectores, junto con mi propia experiencia como usuaria, reforzaron algunas de estas observaciones e identificaron otras oportunidades de mejora:
                        </p>

                        <ul>
                            <li><b>Sobrecarga de información:</b> la cantidad de contenido puede resultar abrumadora y desincentivar la exploración de la Home.</li>
                            <li><b>Relevancia de las recomendaciones:</b>  algunos lectores consideran que las recomendaciones no siempre se ajustan a sus gustos e intereses.</li>
                            <li><b>Necesidad de personalización:</b>  se identifica una oportunidad para adaptar mejor el contenido mostrado a las preferencias individuales.</li>
                            <li><b>Claridad del propósito de las secciones:</b>  algunas secciones se perciben como similares o no permiten comprender claramente qué las diferencia.</li>
                        </ul>
                    </div>

                    <div className="home-problem-statement highlighted-box">
                        <h4 className="dark-title">Planteamiento del problema</h4>

                        <p>
                            Los usuarios de Webtoon necesitan una Home que les permita retomar sus lecturas y descubrir contenido relevante para sus intereses de forma clara y sencilla. Sin embargo, la acumulación de secciones, la repetición de patrones visuales y la limitada diferenciación entre contenidos pueden generar una experiencia abrumadora, dificultar la identificación de información prioritaria y reducir el interés por explorar la página.
                        </p>
                    </div>

                    <div className="home-objetivos">
                        <h4 className="dark-title">Objetivos del diseño</h4>

                        <ul>
                            <li><b>Reducir la sobrecarga visual y cognitiva</b>, simplificando la presentación y organización del contenido.</li>
                            <li><b>Priorizar las acciones principales</b>, facilitando el acceso a las lecturas en curso.</li>
                            <li><b>Mejorar la jerarquía visual</b>, diferenciando las secciones según su propósito.</li>
                            <li><b>Facilitar el descubrimiento de contenido relevante</b>, dando mayor protagonismo a las recomendaciones y a los intereses del usuario.</li>
                            <li><b>Optimizar la exploración de la Home</b>, reduciendo el esfuerzo necesario para localizar contenido de interés.</li>
                        </ul>

                        <p>Estos objetivos guiarán la ideación y el rediseño de la Home en las siguientes fases del proyecto.</p>
                    </div>

                    <div className="home-boceto">
                        <h4 className="dark-title">Boceto</h4>

                        <p>
                            A partir de los problemas identificados durante el análisis, realicé una primera exploración de la estructura de la Home, definiendo la distribución de las secciones y su jerarquía.
                        </p>

                        <p>
                            La propuesta contempla una organización más clara del contenido, la priorización de las lecturas en curso y la adaptación de las recomendaciones al historial y los intereses del usuario.
                        </p>

                        <div className="img-wrapper">

                            <div className={`img-container ${expanded[1] ? "expanded" : ""}`}>
                                <img
                                    src={HomeSketch}
                                    alt="Boceto de la home de webtoon"
                                    className="img-file sketch"
                                />

                                {!expanded[1] && (
                                    <div className="fade-overlay"></div>
                                )}

                            </div>

                            {!expanded[1] && (
                                <button className="toggle-button" onClick={() => handleExpand(1)}>
                                    Ver más
                                </button>
                            )}

                            {expanded[1] && (
                                <button className="toggle-less visible" onClick={() => handleCollapse(1)}>
                                    Ver menos
                                </button>
                            )}

                        </div>
                    </div>

                    <div className="home-wireframe">
                        <h4 className="dark-title">Wireframe</h4>

                        <p>
                        Para agilizar esta fase, utilicé el <b>Agente de Figma (asistente nativo de IA)</b>, proporcionándole el boceto como referencia y solicitándole que lo transformara en un wireframe. El resultado me permitió visualizar la propuesta en un formato más definido antes de avanzar al diseño UI.
                        </p>

                        <div className="img-wrapper">

                            <div className={`img-container ${expanded[2] ? "expanded" : ""}`}>
                                <img
                                    src={HomeWireframe}
                                    alt="Wireframe de la home de webtoon"
                                    className="img-file wireframe"
                                />

                                {!expanded[2] && (
                                    <div className="fade-overlay"></div>
                                )}

                            </div>

                            {!expanded[2] && (
                                <button className="toggle-button" onClick={() => handleExpand(2)}>
                                    Ver más
                                </button>
                            )}

                            {expanded[2] && (
                                <button className="toggle-less visible" onClick={() => handleCollapse(2)}>
                                    Ver menos
                                </button>
                            )}

                        </div>
                    </div>


                </article>


                <article className="webtoon-redesign__block temp-msg" aria-labelledby="temp">
                    <div className="temp">
                        <p className="title"><b>PROYECTO EN PROCESO</b></p>

                        <p className="text">
                            Este proyecto personal explora el rediseño UX/UI de distintas áreas de Webtoon. En este caso de estudio presento la investigación exploratoria, el análisis de la interfaz, los problemas identificados y las propuestas de mejora desarrolladas durante la fase de ideación.
                        </p>

                        <p className="text">
                            Actualmente, el proyecto se encuentra en la fase de wireframing, antes de continuar con el diseño UI y la revisión de la propuesta.
                        </p>
                    </div>
                </article>

            </section>

        </section>
    )
};

export default WebtoonRedesign;