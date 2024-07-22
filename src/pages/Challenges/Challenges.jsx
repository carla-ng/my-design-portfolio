import './Challenges.css';
import useFadeIn from '../../hooks/useFadeIn';

import SignUpSketch from '../../assets/images/challenges/signup_sketch.jpg';
import SignUpWireframe from '../../assets/images/challenges/signup_wireframe.jpg';
import SignUpMockup1 from '../../assets/images/challenges/signup_mockup1.jpg';
import SignUpMockup2 from '../../assets/images/challenges/signup_mockup2.jpg';
import SignUpPreview from '../../assets/images/challenges/signup_preview.png';

const Challenges = () => {
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

                    <p>El reto en este caso era crear una página de signup, por mi parte decidí diseñar una página destinada a una red social para gamers. El objetivo principal fue crear una experiencia de usuario fluida y accesible, permitiendo a los usuarios registrarse de manera rápida y sencilla. Al inicio del proceso hice un brainstorming y listé distintos aspectos a tomar en cuenta, independientemente de si serían incluidos en el diseño final o no:</p>

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

                    <p>Finalmente, creé en Figma el mockup del diseño final:</p>

                    <div className="challlenges__images">
                        <img className="challenges__mockup" src={ SignUpMockup1 } alt="Mockup final de Crear Cuenta hecho en Figma"/>

                        <img className="challenges__mockup" src={ SignUpMockup2 } alt="Mockup final de Crear Cuenta con feedback de formulario hecho en Figma"/>
                    </div>
                    
                </div>

                <div className="challenges__checkout">
                    <h2>Checkout</h2>
                    <p>Explicacion, luego imagenes</p>
                </div>

                <div className="challenges__calculator">
                    <h2>Calculadora</h2>
                    <p>Explicacion, luego imagenes</p>
                </div>

                <div className="challenges__homepage">
                    <h2>Homepage</h2>
                    <p>Explicacion, luego imagenes</p>
                </div>
            </section>

        </div>
    )
};

export default Challenges;