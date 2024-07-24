import { useCallback, useEffect, useRef, useState } from 'react';

import './Challenges.css';
import useFadeIn from '../../hooks/useFadeIn';

import SignUpSketch from '../../assets/images/challenges/signup_sketch.jpg';
import SignUpWireframe from '../../assets/images/challenges/signup_wireframe.jpg';
import SignUpMockup1 from '../../assets/images/challenges/signup_mockup1.jpg';
import SignUpMockup2 from '../../assets/images/challenges/signup_mockup2.jpg';
import SignUpPreview from '../../assets/images/challenges/signup_preview.png';

import CheckoutSketch from '../../assets/images/challenges/checkout_sketch.jpg';
import CheckoutWireframe from '../../assets/images/challenges/checkout_wireframe.jpg';
import CheckoutMockup from '../../assets/images/challenges/checkout_mockup.jpg';
import CheckoutPreview from '../../assets/images/challenges/checkout_preview.png';

import CalculatorSketch from '../../assets/images/challenges/calculator_sketch.jpg';
import CalculatorWireframe from '../../assets/images/challenges/calculator_wireframe.jpg';
import CalculatorMockup from '../../assets/images/challenges/calculator_mockup.jpg';
import CalculatorPreview from '../../assets/images/challenges/calculator_preview.png';

import HomepageSketch from '../../assets/images/challenges/homepage_sketch.jpg';
import HomepageWireframe from '../../assets/images/challenges/homepage_wireframe.jpg';
import HomepageMockup from '../../assets/images/challenges/homepage_mockup.jpg';
import HomepagePreview from '../../assets/images/challenges/homepage_preview.png';


const Challenges = () => {
    const fadeInClass = useFadeIn()
    
    const initialCollapsedStates = [true, true, true, true]
    const [collapsedStates, setCollapsedStates] = useState(initialCollapsedStates)
    const contentRefs = useRef([])
    const headerRefs = useRef([])


    const updateContentHeights = useCallback(() => {
        contentRefs.current.forEach(( ref, index ) => {
            if ( ref ) {
                ref.style.height = collapsedStates[index] ? '0px' : `${ref.scrollHeight}px`;
            }
        });
    }, [collapsedStates])


    useEffect(() => {
        updateContentHeights()
        window.addEventListener('resize', updateContentHeights)
        
        return () => {
            window.removeEventListener('resize', updateContentHeights)
        }
    }, [collapsedStates, updateContentHeights])


    const toggleCollapse = ( index ) => {
        if ( !collapsedStates[index] ) {
            headerRefs.current[index].scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                setCollapsedStates(prevStates => {
                    const newStates = [...prevStates];
                    newStates[index] = true;
                    return newStates;
                })

                setTimeout(() => {
                    contentRefs.current[index].style.height = '0px'
                }, 0)
            }, 150); // match this duration with CSS transition duration
        } else {
            setCollapsedStates(prevStates => {
                const newStates = [...prevStates]
                newStates[index] = false
                return newStates
            });
        }
    }


    const getHeight = ( index ) => {
        if ( contentRefs.current[index] ) {
            return collapsedStates[index] ? '0px' : `${contentRefs.current[index].scrollHeight}px`;
        }
        return '0px';
    }


    return (
        <div id="challenges" className="page">

            <div className="introduction">
                <h1 className="introduction__title">
                    <span>Retos de Diseño UX/UI</span>
                </h1>
                <p className={`introduction__text ${fadeInClass}`}>
                    Aquí encontrarás una recopilación de mis trabajos realizados a partir de diversos retos en línea. Estos desafíos me han permitido practicar y mejorar mis habilidades en la creación de componentes y páginas web. Cada proyecto documentado aquí sigue un proceso completo, que incluye <span className="highlighted-text">brainstorming, sketches, wireframes y el mockup final</span>.
                </p>

                <p className={`introduction__text ${fadeInClass}`}>
                    Dado que se trata de retos, cada uno de estos procesos se lleva a cabo en un <span className="highlighted-text">período de 1-2 días</span>, lo que me permite experimentar y aprender de manera rápida y efectiva, priorizando los puntos de mayor importancia. Los textos de los proyectos han sido incluidos en inglés.
                </p>
            </div>

            <section className={`challenges-container ${fadeInClass}`}>
                <div className="challenges__signup-page">
                    <h2 ref={el => headerRefs.current[0] = el}>Crear Cuenta</h2>

                    <div className="challlenges__preview signup" style={{backgroundImage: `url(${SignUpPreview})`}}></div>

                    <p>El reto en este caso era crear una página de signup, por mi parte decidí diseñar una página destinada a una <strong>red social para gamers</strong>. El objetivo principal fue crear una experiencia de usuario fluida y accesible, permitiendo a los usuarios registrarse de manera rápida y sencilla.</p>

                    <div
                        className={`collapsed-content ${collapsedStates[0] ? 'hidden' : 'visible'}`}
                        ref={el => contentRefs.current[0] = el}
                        style={{ height: getHeight(0) }}
                    >
                        <p>Al inicio del proceso hice un brainstorming y listé distintos aspectos a tomar en cuenta, independientemente de si serían incluidos en el diseño final o no:</p>

                        <ul>
                            <li>Logo/nombre de la app.</li>
                            <li>Título de Crear Cuenta e instrucciones.</li>
                            <li>Inputs para nombre de usuario, email y clave.</li>
                            <li>Opciones de Registro: incluir múltiples opciones de registro para mayor flexibilidad, permitiendo a los usuarios registrarse utilizando su correo electrónico o a través de Google (Gmail). Esta funcionalidad asegura que los usuarios puedan elegir el método de registro que les resulte más conveniente.</li>
                            <li>Aceptar términos y condiciones, y políticas de privacidad.</li>
                            <li>Botón de Crear Cuenta.</li>
                            <li>Validación de Campos: implementar validación de los inputs del formulario para asegurar la correcta entrada de datos. Considerar utilizar bordes de colores (verde para correcto y rojo para incorrecto) alrededor de los inputs para proporcionar retroalimentación visual inmediata, además de añadir iconos de check y X para indicar la validez de cada campo. De esta manera, será más accesible para los distintos tipos de usuario. En caso de recibir un feedback incorrecto, se colocará el error debajo del input para que el usuario pueda solucionarlo.</li>
                            <li>Mostrar nivel de seguridad de la clave introducida.</li>
                        </ul>

                        <p>Una vez tuve claro todas las cosas que podría incluir el signup, realicé varios sketches, hasta quedarme con una versión final. Seguidamente, creé en Figma un wireframe en base al sketch.</p>

                        <div className="challlenges__images">
                            <img className="challenges__sketch" src={ SignUpSketch } alt="Sketch de Crear Cuenta hecho a mano"/>

                            <img className="challenges__wireframe border" src={ SignUpWireframe } alt="Wireframe de Crear Cuenta hecho en Figma"/>
                        </div>

                        <p>Finalmente, creé en Figma el mockup del diseño final, utilizando una paleta de colores inspirada en una estética popular dentro del mundo de los videojuegos, con un fondo negro complementado por detalles en morado.</p>

                        <div className="challlenges__images">
                            <img className="challenges__mockup" src={ SignUpMockup1 } alt="Mockup final de Crear Cuenta hecho en Figma"/>

                            <img className="challenges__mockup" src={ SignUpMockup2 } alt="Mockup final de Crear Cuenta con feedback de formulario hecho en Figma"/>
                        </div>
                    </div>

                    <div className="collapse">
                        <div className="collapse-inner" onClick={() => toggleCollapse(0)}>
                            { collapsedStates[0] ? (
                                <>
                                    <span>Ver más</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"> <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
                                </>
                            ) : (
                                <>
                                    <span>Ver menos</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#000000" /></svg>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <div className="challenges__checkout">
                    <h2 ref={el => headerRefs.current[1] = el}>Checkout</h2>

                    <div className="challlenges__preview checkout" style={{backgroundImage: `url(${CheckoutPreview})`}}></div>

                    <p>Para este proyecto diseñé una página de checkout para una <strong>tienda de ropa y maquillaje</strong>. Opté por incluir todas las secciones esenciales en una única página en lugar de hacerlo paso a paso, este enfoque permite a los usuarios tener toda la información disponible en un solo lugar y modificarla rápidamente si lo desean.</p>

                    <div
                        className={`collapsed-content ${collapsedStates[1] ? 'hidden' : 'visible'}`}
                        ref={el => contentRefs.current[1] = el}
                        style={{ height: getHeight(1) }}
                    >
                        <p>Para organizar mejor los elementos a tomar en cuenta para el diseño, he creado el siguiente listado:</p>

                        <ul>
                            <li>Logo/nombre de la marca.</li>
                            <li>Título de &quot;Checkout&quot;.</li>
                            <li>Botón/Flecha para volver a la página anterior.</li>
                            <li>Resumen de la orden de compra: nombre de objetos, imágenes, tamaños, colores, cantidades, precios, precio total.</li>
                            <li>Opción de editar objetos de compra: se puede disminuir o aumentar la cantidad de un objeto a comprar, también se pueden eliminar.</li>
                            <li>Información del cliente: email y número de teléfono para confirmación de compra y actualizaciones, dirección de envió incluyendo calle, ciudad, código postal, país.</li>
                            <li>Dirección de facturación: se podrá elegir la misma que la de envío o introducir una distinta.</li>
                            <li>Método de envío: distintas opciones con tiempos de espera estimados, a distintos precios.</li>
                            <li>Información de pago: tarjeta de crédito/débito, paypal, otro.</li>
                            <li>Botón de realizar/finalizar compra: su texto debe estar muy bien pensado para que el usuario entienda que, al hacer click en el botón, se finalizará el proceso de compra y se realizará el cobro.</li>
                            <li>Otros elementos opcionales: código de descuento, link o información de contacto para atención al cliente en caso de incidencias, aceptar términos y condiciones, obtener puntos por la compra.</li>
                        </ul>

                        <p>Este caso fue más complejo que otros y ha tomado más tiempo decidir los elementos a incluir en la página, en especial porque un proceso de pago puede resultar más delicado o estresante para el usuario y necesita estar todo más claro.</p>

                        <div className="challlenges__images">
                            <img className="challenges__sketch" src={ CheckoutSketch } alt="Sketch de Checkout hecho a mano"/>

                            <img className="challenges__wireframe border" src={ CheckoutWireframe } alt="Wireframe de Checkout hecho en Figma"/>
                        </div>

                        <p>El mockup del diseño final con Figma, manteniendo un estilo claro y limpio:</p>

                        <div className="challlenges__images">
                            <img className="challenges__mockup border" src={ CheckoutMockup } alt="Mockup final de Checkout hecho en Figma"/>
                        </div>
                    </div>

                    <div className="collapse">
                        <div className="collapse-inner" onClick={() => toggleCollapse(1)}>
                            { collapsedStates[1] ? (
                                <>
                                    <span>Ver más</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"> <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
                                </>
                            ) : (
                                <>
                                    <span>Ver menos</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#000000" /></svg>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <div className="challenges__calculator">
                    <h2 ref={el => headerRefs.current[2] = el}>Calculadora</h2>

                    <div className="challlenges__preview calculator" style={{backgroundImage: `url(${CalculatorPreview})`}}></div>

                    <p>Hoy en día es normal que todos tengamos una calculadora en el bolsillo, ya que es una de las cosas que solemos tener por defecto en nuestro móvil. Todas estas calculadoras suelen ser muy parecidas, algunas tal vez más complejas que otras. Para plantearme un reto distinto y no hacer lo mismo que todos, he decidio diseñar una <strong>calculadora para niños</strong>, la cual debería ser más sencilla y llamativa que una utilizada comúnmente por adultos.</p>

                    <div
                        className={`collapsed-content ${collapsedStates[2] ? 'hidden' : 'visible'}`}
                        ref={el => contentRefs.current[2] = el}
                        style={{ height: getHeight(2) }}
                    >

                        <p>Al ser para niños, tendría que priorizar las operaciones básicas que se suelen realizar a edades más tempranas, como lo son: suma, resta, multiplicación y división. Y tendría que mantener el diseño muy simple y agregar colores para resaltar distintos tipos de botones. Así mi listado de puntos a tomar en cuenta ha sido algo más reducido que de costumbre:</p>

                        <ul>
                            <li>Algunas operaciones/acciones básicas: suma, resta, multiplicación, división, porcentaje, borrar.</li>
                            <li>Ver si es necesario agregar alguna operación más avanzada.</li>
                            <li>Posibilidad de modo claro y modo oscuro, o hacer uno único con colores llamativos.</li>
                            <li>Tomar tiempo para estudiar ubicación de los botones, incluyendo los números, para que sean fáciles de ubicar y no logren confundirse entre sí.</li>
                        </ul>

                        <p>Decidí agregar el diseño de un animal para hacerlo más llamativo. Elegí el gato ya que es un gran conocido y favorito entre niños:</p>

                        <div className="challlenges__images">
                            <img className="challenges__sketch" src={ CalculatorSketch } alt="Sketch de la Calculadora hecho a mano"/>

                            <img className="challenges__wireframe" src={ CalculatorWireframe } alt="Wireframe de la Calculadora hecho en Figma"/>
                        </div>

                        <p>A diferencia de lo que se suele hacer con los diseños para gente de más edad, decidí agregar más elementos y colores al diseño final:</p>

                        <div className="challlenges__images">
                            <img className="challenges__mockup" src={ CalculatorMockup } alt="Mockup final de la Calculadora hecho en Figma"/>
                        </div>
                    </div>                    

                    <div className="collapse">
                        <div className="collapse-inner" onClick={() => toggleCollapse(2)}>
                            { collapsedStates[2] ? (
                                <>
                                    <span>Ver más</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"> <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
                                </>
                            ) : (
                                <>
                                    <span>Ver menos</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#000000" /></svg>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <div className="challenges__homepage">
                    <h2 ref={el => headerRefs.current[3] = el}>Homepage</h2>

                    <div className="challlenges__preview homepage" style={{backgroundImage: `url(${HomepagePreview})`}}></div>

                    <p>Una homepage suele ser un reto más grande que diseñar un componente pequeño. Después de considerar varias opciones, decidí crearla para una <strong>plataforma de cursos para creativos</strong>. Estas plataformas suelen ser más utilizadas en ordernador, por lo que he optado por hacer el diseño en formato desktop.</p>

                    <div
                        className={`collapsed-content ${collapsedStates[3] ? 'hidden' : 'visible'}`}
                        ref={el => contentRefs.current[3] = el}
                        style={{ height: getHeight(3) }}
                    >
                        <p>Para este caso tuve que realizar un estudio más exhaustivo de plataformas de cursos online, y he podido notar que los diseños suelen variar muchísimo entre una y otra. Por lo tanto, he tenido que hacer un análisis de cuáles serían las secciones más relevantes que podrían captar la atención de creativos que estén considerando unirse. Finalmente me he quedado con el siguiente listado:</p>

                        <ul>
                            <li>Header con logo, navegación y login.</li>
                            <li>Hero: imagen e introducción al sitio web, CTA para suscribirse.</li>
                            <li>Compañías con las que estamos trabajando / que confían en nosotros.</li>
                            <li>Sobre nosotros.</li>
                            <li>Cursos populares entre los usuarios.</li>
                            <li>Testimonios.</li>
                            <li>Top de categorías.</li>
                            <li>Precios: en caso de ser todo accesible con un único pago por mes/año/etc. También podría ser gratis unirse, y luego el usuario tendría que pagar por los cursos que desea poder acceder.</li>
                            <li>Segundo CTA para suscribirse.</li>
                            <li>Footer.</li>
                        </ul>
                        
                        <p>Realicé varios sketches para probar distintas maneras de ordenar las secciones que quería incluir, hasta que finalmente me he quedado con la siguiente opción:</p>

                        <div className="challlenges__images">
                            <img className="challenges__sketch desktop" src={ HomepageSketch } alt="Sketch de la Homepage hecho a mano"/>

                            <img className="challenges__wireframe border desktop" src={ HomepageWireframe } alt="Wireframe de la Homepage hecho en Figma"/>
                        </div>

                        <p>Hay un par de puntos a destacar en la creación de este diseño, como el hecho de que he querido agregar más color y algunas ilustraciones, que podrían ser más llamativas para alguien interesado en la temática de la plataforma. También, he probado distintos textos a incluir en el CTA, hasta que he optado por la opción de &quot;Join for free&quot;, ya que se deja claro al usuario que no tendrá costo alguno el apuntarse.</p>

                        <div className="challlenges__images">
                            <img className="challenges__mockup border desktop" src={ HomepageMockup } alt="Mockup final de la Homepage hecho en Figma"/>
                        </div>
                    </div>

                    <div className="collapse">
                        <div className="collapse-inner" onClick={() => toggleCollapse(3)}>
                            { collapsedStates[3] ? (
                                <>
                                    <span>Ver más</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"> <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
                                </>
                            ) : (
                                <>
                                    <span>Ver menos</span>
                                    <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#000000" /></svg>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
};

export default Challenges;