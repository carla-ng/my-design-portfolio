import { useState } from 'react';

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
/*import CheckoutPreview from '../../assets/images/challenges/checkout_preview.png';*/

import CalculatorSketch from '../../assets/images/challenges/calculator_sketch.jpg';
import CalculatorWireframe from '../../assets/images/challenges/calculator_wireframe.jpg';
import CalculatorMockup from '../../assets/images/challenges/calculator_mockup.jpg';
/*import CalculatorPreview from '../../assets/images/challenges/calculator_preview.png';*/

import HomepageSketch from '../../assets/images/challenges/homepage_sketch.jpg';
import HomepageWireframe from '../../assets/images/challenges/homepage_wireframe.jpg';
import HomepageMockup from '../../assets/images/challenges/homepage_mockup.jpg';
/*import HomepagePreview from '../../assets/images/challenges/homepage_preview.png';*/

const Challenges = () => {
    const [collapsedStates, setCollapsedStates] = useState([true, true])

    const toggleCollapse = ( index ) => {
        setCollapsedStates(prevStates => {
            const newStates = [...prevStates]
            newStates[index] = !newStates[index]
            return newStates
        })
    }

    const fadeInClass = useFadeIn()

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
                    <h2>Crear Cuenta</h2>

                    <figure className="challlenges__preview signup">
                        <img src={ SignUpPreview } alt="Preview de Crear Cuenta en un movil con una mano sujetandolo"/>
                    </figure>

                    <p>El reto en este caso era crear una página de signup, por mi parte decidí diseñar una página destinada a una red social para gamers. El objetivo principal fue crear una experiencia de usuario fluida y accesible, permitiendo a los usuarios registrarse de manera rápida y sencilla.</p>

                    <div className={`collapsed-content ${collapsedStates[0] ? 'hidden' : 'visible'}`}>
                        <p>Al inicio del proceso hice un brainstorming y listé distintos aspectos a tomar en cuenta, independientemente de si serían incluidos en el diseño final o no:</p>

                        <ul>
                            <li>Logo/nombre de la app.</li>
                            <li>Título de Crear Cuenta e instrucciones.</li>
                            <li>Inputs para nombre de usuario, email y clave.</li>
                            <li>Opciones de Registro: incluir múltiples opciones de registro para mayor flexibilidad, permitiendo a los usuarios registrarse utilizando su correo electrónico o a través de Google (Gmail). Esta funcionalidad asegura que los usuarios puedan elegir el método de registro que les resulte más conveniente.</li>
                            <li>Aceptar términos y condiciones, y políticas de privacidad.</li>
                            <li>Botón de Crea Cuenta.</li>
                            <li>Validación de Campos: implementar validación de los inputs del formulario para asegurar la correcta entrada de datos. Considerar utilizar bordes de colores (verde para correcto y rojo para incorrecto) alrededor de los inputs para proporcionar retroalimentación visual inmediata, además de añadir iconos de check y X para indicar la validez de cada campo. De esta manera, será más accesible para los distintos tipos de usuario. En caso de recibir un feedback incorrecto, se colocará el error debajo del input para que el usario pueda solucionarlo.</li>
                            <li>Mostrar seguridad de la clave introducida.</li>
                        </ul>

                        <p>Una vez tuve claro todas las cosas que podría incluir el signup, realicé varios sketches, hasta quedarme con una versión final. Seguidamente, creé en Figma un wireframe en base al sketch.</p>

                        <div className="challlenges__images">
                            <img className="challenges__sketch" src={ SignUpSketch } alt="Sketch de Crear Cuenta hecho a mano"/>

                            <img className="challenges__wireframe" src={ SignUpWireframe } alt="Wireframe de Crear Cuenta hecho en Figma"/>
                        </div>

                        <p>Finalmente, creé en Figma el mockup del diseño final, utilizando una paleta de colores inspirada en una estética gamer, con un fondo negro complementado por detalles en morado.</p>

                        <div className="challlenges__images">
                            <img className="challenges__mockup" src={ SignUpMockup1 } alt="Mockup final de Crear Cuenta hecho en Figma"/>

                            <img className="challenges__mockup" src={ SignUpMockup2 } alt="Mockup final de Crear Cuenta con feedback de formulario hecho en Figma"/>
                        </div>
                    </div>

                    <div className="collapse" onClick={() => toggleCollapse(0)}>
                        { collapsedStates[0] ? 'Ver más' : 'Ver menos' }
                    </div>
                    
                </div>


                <div className="challenges__checkout">
                    <h2>Checkout</h2>

                    <figure className="challlenges__preview checkout">
                        <img src={ CheckoutMockup } alt="Preview de Checkout"/>
                    </figure>

                    <p>Para este proyecto, diseñé una página de checkout integral para una tienda de ropa y maquillaje. Opté por incluir todas las secciones esenciales en una única página en lugar de hacerlo paso a paso. Este enfoque permite a los usuarios tener toda la información disponible en un solo lugar y modificarla rápidamente si lo desean.</p>

                    <p>Para organizar mejor los elementos a tomar en cuenta para el diseño, he creado el siguiente listado:</p>

                    <ul>
                        <li>Logo/nombre de la marca.</li>
                        <li>Título de &quot;Checkout&quot;.</li>
                        <li>Botón/Flecha para volver a la página anterior.</li>
                        <li>Resumen de la orden de compra: nombre de objetos, imágenes, tamaños, colores, cantidades, precios, subtotal.</li>
                        <li>Opción de editar objetos de compra: se puede disminuir o aumentar la cantidad de un objeto a comprar, también se pueden eliminar.</li>
                        <li>Información del cliente: email y número de teléfono para confirmación de compra y actualizaciones, dirección de envió incluyendo calle, ciudad, código postal, país.</li>
                        <li>Dirección de facturación (se podrá elegir la misma que la de envío o introducir una distinta)</li>
                        <li>Método de envío: distintas opciones con tiempos de espera estimados, a distintos precios.</li>
                        <li>Información de pago: tarjeta de crédito/débito, paypal, otro.</li>
                        <li>Botón de realizar/finalizar compra.</li>
                        <li>Otros elementos opcionales: código de descuento, link o información de contacto para atención al cliente en caso de incidencias, aceptar términos y condiciones, obtener puntos por la compra.</li>
                    </ul>

                    <p>Este caso fue más complejo y ha tomado más tiempo decidir los elementos a incluir en la página, en especial porque un proceso de pago puede resultar más delicado para el usuario y necesita estar todo más claro.</p>

                    <div className="challlenges__images">
                        <img className="challenges__sketch" src={ CheckoutSketch } alt="Sketch de Checkout hecho a mano"/>

                        <img className="challenges__wireframe" src={ CheckoutWireframe } alt="Wireframe de Checkout hecho en Figma"/>
                    </div>

                    <p>El mockup del diseño final con Figma, manteniendo un estilo claro y limpio:</p>

                    <div className="challlenges__images">
                        <img className="challenges__mockup" src={ CheckoutMockup } alt="Mockup final de Checkout hecho en Figma"/>
                    </div>
                </div>


                <div className="challenges__calculator">
                    <h2>Calculadora</h2>
                    
                    <figure className="challlenges__preview calculator">
                        <img src={ CalculatorMockup } alt="Preview de la Calculadora"/>
                    </figure>

                    <div className="challlenges__images">
                        <img className="challenges__sketch" src={ CalculatorSketch } alt="Sketch de la Calculadora hecho a mano"/>

                        <img className="challenges__wireframe" src={ CalculatorWireframe } alt="Wireframe de la Calculadora hecho en Figma"/>
                    </div>

                    <div className="challlenges__images">
                        <img className="challenges__mockup" src={ CalculatorMockup } alt="Mockup final de la Calculadora hecho en Figma"/>
                    </div>
                </div>


                <div className="challenges__homepage">
                    <h2>Homepage</h2>
                    
                    <figure className="challlenges__preview homepage">
                        <img src={ HomepageMockup } alt="Preview de la Homepage"/>
                    </figure>

                    <div className="challlenges__images">
                        <img className="challenges__sketch" src={ HomepageSketch } alt="Sketch de la Homepage hecho a mano"/>

                        <img className="challenges__wireframe" src={ HomepageWireframe } alt="Wireframe de la Homepage hecho en Figma"/>
                    </div>

                    <div className="challlenges__images">
                        <img className="challenges__mockup" src={ HomepageMockup } alt="Mockup final de la Homepage hecho en Figma"/>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default Challenges;