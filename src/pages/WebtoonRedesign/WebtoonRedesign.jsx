import { useEffect, useRef, useState } from 'react';

import './WebtoonRedesign.css';
import useFadeIn from '../../hooks/useFadeIn';

import HomeAnalysis from '../../assets/images/webtoon-redesign/webtoon-home_analysis.jpg';
import HomeSketch from '../../assets/images/webtoon-redesign/webtoon-home_sketch.jpg';


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
                            <p><b>Metodología:</b> Doble Diamante</p>
                            <p><b>Alcance:</b> Rediseño UX/UI focalizado (Home, navegación, biblioteca del usuario y página de un webtoon)</p>
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

                    <div className="home-visual-analysis">
                        <h4 className="dark-title">Análisis visual</h4>

                        <p>Captura de la Home de la app de Webtoon con apuntes sobre el análisis:</p>

                        <div className="img-wrapper">

                            <div className={`img-container ${expanded[0] ? "expanded" : ""}`}>
                                <img 
                                    src={ HomeAnalysis } 
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

                        <p>
                            A partir del análisis de la Home actual, se identificaron los siguientes problemas principales.
                        </p>
                    </div>

                    <div className="home-detected-problems">
                        <h4 className="dark-title">Problemas detectados</h4>

                        <ul>
                            <li>Exceso de secciones consecutivas sin una jerarquía clara.</li>
                            <li>Repetición constante del mismo patrón visual (listas horizontales).</li>
                            <li>Mezcla de objetivos del usuario y objetivos promocionales.</li>
                            <li>Dificultad para escanear el contenido rápidamente.</li>
                            <li>Scroll excesivo para acceder a contenido prioritario.</li>
                        </ul>
                    </div>

                    <div className="home-problem-statement highlighted-box">
                        <h4 className="dark-title">Planteamiento del problema</h4>

                        <p>
                            Los usuarios de Webtoon necesitan una Home clara y jerarquizada que les permita retomar lecturas y descubrir nuevo contenido de forma rápida y sin esfuerzo, pero la estructura actual presenta demasiadas secciones al mismo nivel, patrones repetidos y contenido poco prioritario, lo que genera confusión y fatiga al navegar.
                        </p>
                    </div>

                    <div className="home-objetivos">
                        <h4 className="dark-title">Objetivos del diseño (derivados del problema)</h4>

                        <ul>
                            <li>Priorizar acciones clave del usuario (continuar leyendo y descubrir).</li>
                            <li>Reducir la carga cognitiva.</li>
                            <li>Establecer una jerarquía clara entre tipos de contenido.</li>
                            <li>Facilitar la exploración sin necesidad de scroll excesivo.</li>
                            <li>Diferenciar claramente tipos de contenido.</li>
                        </ul>

                        <p>Estos objetivos guiarán la ideación y el rediseño de la Home en las siguientes fases del proyecto.</p>
                    </div>

                    <div className="home-boceto">
                        <h4 className="dark-title">Boceto</h4>

                        <p>En el siguiente boceto se puede observar una propuesta para el rediseño de la home.</p>
                    
                        <div className="img-wrapper">

                            <div className={`img-container ${expanded[1] ? "expanded" : ""}`}>
                                <img 
                                    src={ HomeSketch } 
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

                </article>


                <article className="webtoon-redesign__block temp-msg" aria-labelledby="temp">
                    <div className="temp">
                        <p className="title"><b>PROYECTO EN PROCESO</b></p>

                        <p className="text">
                            Este es un proyecto <b>personal</b>, con fases de investigación, análisis heurístico, definición del problema, ideación, wireframing y diseño UI final. A lo largo del case study expongo las decisiones de diseño, los problemas detectados y las soluciones planteadas, combinando una perspectiva tanto <b>UX</b> como <b>UI</b>.
                        </p>
                    </div>
                </article>

            </section>

        </section>
    )
};

export default WebtoonRedesign;