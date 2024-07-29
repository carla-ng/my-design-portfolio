import { useNavigate } from 'react-router-dom';

import './Challenges.css';
import useFadeIn from '../../hooks/useFadeIn';

import SignUpPreview from '../../assets/images/challenges/signup_preview.png';
import CheckoutPreview from '../../assets/images/challenges/checkout_preview.png';
import CalculatorPreview from '../../assets/images/challenges/calculator_preview.png';
import HomepagePreview from '../../assets/images/challenges/homepage_preview.png';


const Challenges = () => {
    const fadeInClass = useFadeIn()
    const navigate = useNavigate()
    

    const goToProject = ( challengeId ) => {
        navigate(`/challenges/${challengeId}`)
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
                    <h2>Crear Cuenta</h2>

                    <div className="challlenges__preview signup" style={{backgroundImage: `url(${SignUpPreview})`}}></div>

                    <p>El reto en este caso era crear una página de signup, por mi parte decidí diseñar una página destinada a una <strong>red social para gamers</strong>. El objetivo principal fue crear una experiencia de usuario fluida y accesible, permitiendo a los usuarios registrarse de manera rápida y sencilla.</p>

                    <button className="view-more default">
                        <span className="default__text" onClick={() => goToProject('signup')}>Ver más</span>
                    </button>
                </div>


                <div className="challenges__checkout">
                    <h2>Checkout</h2>

                    <div className="challlenges__preview checkout" style={{backgroundImage: `url(${CheckoutPreview})`}}></div>

                    <p>Para este proyecto diseñé una página de checkout para una <strong>tienda de ropa y maquillaje</strong>. Opté por incluir todas las secciones esenciales en una única página en lugar de hacerlo paso a paso, este enfoque permite a los usuarios tener toda la información disponible en un solo lugar y modificarla rápidamente si lo desean.</p>

                    <button className="view-more default">
                        <span className="default__text" onClick={() => goToProject('checkout')}>Ver más</span>
                    </button>
                </div>


                <div className="challenges__calculator">
                    <h2>Calculadora</h2>

                    <div className="challlenges__preview calculator" style={{backgroundImage: `url(${CalculatorPreview})`}}></div>

                    <p>Hoy en día es normal que todos tengamos una calculadora en el bolsillo, ya que es una de las cosas que solemos tener por defecto en nuestro móvil. Todas estas calculadoras suelen ser muy parecidas, algunas tal vez más complejas que otras. Para plantearme un reto distinto y no hacer lo mismo que todos, he decidio diseñar una <strong>calculadora para niños</strong>, la cual debería ser más sencilla y llamativa que una utilizada comúnmente por adultos.</p>          

                    <button className="view-more default">
                        <span className="default__text" onClick={() => goToProject('calculator')}>Ver más</span>
                    </button>
                </div>


                <div className="challenges__homepage">
                    <h2>Homepage</h2>

                    <div className="challlenges__preview homepage" style={{backgroundImage: `url(${HomepagePreview})`}}></div>

                    <p>Una homepage suele ser un reto más grande que diseñar un componente pequeño. Después de considerar varias opciones, decidí crearla para una <strong>plataforma de cursos para creativos</strong>. Estas plataformas suelen ser más utilizadas en ordernador, por lo que he optado por hacer el diseño en formato desktop.</p>

                    <button className="view-more default">
                        <span className="default__text" onClick={() => goToProject('homepage')}>Ver más</span>
                    </button>
                </div>

            </section>

        </div>
    )
};

export default Challenges;