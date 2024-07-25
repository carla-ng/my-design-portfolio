import './ComponentSystem.css';
import ColumnsImage from '../../assets/images/system/columns.jpg';
import SkinsImage from '../../assets/images/system/skins.jpg';

import useFadeIn from '../../hooks/useFadeIn';


const ComponentSystem = () => {
    const fadeInClass = useFadeIn()

    return (
        <div id="component-system" className="page">

            <div className="introduction">
                <h1 className="introduction__title">
                    <span>Sistema de Componentes</span>
                </h1>
                <p className={`introduction__text ${fadeInClass}`}>
                    Como desarrolladora web, fui parte integral de un proyecto para crear un sistema de componentes y portales para nuestra plataforma. Colaboré estrechamente con el equipo de diseño UX/UI, proporcionando ideas, feedback técnico, respondiendo consultas y asegurando que los diseños fueran implementables y accesibles. Además, tuve la oportunidad de diseñar componentes y páginas adicionales según las necesidades del proyecto.
                </p>
            </div>

            <div className="component-system-container">

                <div className="component-system__summary">
                    <div className="component-system__summary-first">
                        <article>
                            <h4>Antecedentes</h4>
                            <p>La empresa contaba con un sistema de componentes y portales, el cual era configurable desde un CMS propio interno. Sin embargo, este sistema ofrecía poca flexibilidad. Había una cantidad limitada de plantillas de portales, con layouts preestablecidos y reutilizados para numerosos portales, y sus componentes eran similares y apenas se podían modificar.</p>
                        </article>

                        <article>
                            <h4>Problema</h4>
                            <p>Esta limitación hacía que los diferentes portales creados con la misma plantilla fueran muy similares, presentando sólo pequeñas diferencias. Era necesario un sistema que permitiera mayor libertad en la creación de layouts para las páginas de los portales, y lograr así una mayor variedad.</p>
                        </article>
                    </div>

                    <div className="component-system__summary-second">
                        <article>
                            <h4>Objetivo</h4>
                            <p>Crear un nuevo sistema de componentes y portales más flexible. En primer lugar, desarrollar nuevos componentes que permitan una mayor variedad de diseños. En segundo lugar, implementar un editor que facilite la configuración de los layouts de cada página y la distribución de los componentes. El sistema debe ser escalable, permitiendo la incorporación continua de nuevos componentes y la expansión del catálogo a lo largo del tiempo.</p>
                        </article>

                        <article>
                            <h4>Equipos involucrados</h4>
                            <p>Product Owner, Desarrolladores (mi rol), Diseñadores UX/UI, QA Testers</p>
                        </article>
                    </div>                    
                </div>

                <div className="component-system__info columns">
                    <div>
                        <h4>12 Columnas</h4>
                        <p>Al inicio del proyecto, los desarrolladores recomendamos a los diseñadores basarse en un sistema de 12 columnas para los layouts y componentes del nuevo sistema, similar al de Bootstrap. Este enfoque proporciona una estructura flexible que facilita la adaptación a diferentes dispositivos, mejora la consistencia visual y simplifica el desarrollo y mantenimiento. Además, establece reglas claras para la alineación y el espaciado, lo que agiliza el proceso de diseño y mejora la colaboración entre equipos.</p>
                    </div>
                    <figure>
                        <img src={ ColumnsImage } alt="Ejemplo de sistema de 12 columnas" />
                    </figure>
                </div>                

                <div className="component-system__info variants">
                    <div>
                        <h4>Variantes y Prioridades</h4>
                        <p>Se realizaron diversas pruebas para determinar cómo diseñar los componentes con mayor flexibilidad. Finalmente, se decidió que cada componente podría tener múltiples variantes, permitiendo diferentes &quot;versiones&quot; de un mismo componente. Estas variantes podrían diferir en CSS o incluso en aspectos más importantes de la estructura HTML. Además, se establecieron &quot;prioridades&quot; para los componentes, lo que facilita que en una misma página un componente pueda aparecer en una versión más grande (con mayor prioridad) y en una versión más pequeña (con menor prioridad), optimizando así la adaptabilidad y el diseño responsivo.</p>
                    </div>
                </div>

                <div className="component-system__info skins">
                    <figure>
                        <img src={ SkinsImage } alt="Ejemplo de codigo CSS de un skin" />
                    </figure>
                    <div>
                        <h4>Skins</h4>
                        <p>Para proporcionar flexibilidad y variedad a los componentes y portales, se implementó el concepto de &quot;skins&quot;. Un skin es un archivo CSS que define variables para colores, tipografías y otras características visuales del portal. Aunque esta funcionalidad ya existía en el sistema anterior, se decidió mantenerla y mejorarla, ofreciendo una mayor definición y personalización para los portales.</p>
                    </div>
                </div>

                <div className="component-system__info format">
                    <div>
                        <h4>Sólo mobile y desktop</h4>
                        <p>Se estableció que los diseñadores UX/UI realizarían los diseños de portales y componentes únicamente en formatos móvil y desktop, utilizando 768px como breakpoint. Esta decisión se basó en un estudio de tráfico que reveló que la mayoría de nuestros usuarios accedían a los portales desde dispositivos móviles, mientras que el resto utilizaba principalmente ordenadores. Esta estrategia permite optimizar los recursos de diseño y desarrollo, enfocándose en los dispositivos más utilizados por nuestros usuarios.</p>
                    </div>
                </div>


                <div className="component-system__info learned">
                    <div>
                        <h4>Lo que aprendí</h4>
                        <p>A lo largo del proceso, logré adquirir valiosas habilidades en colaboración interdisciplinaria, trabajando de cerca con equipos de diseño UX/UI para integrar feedback técnico y asegurar la viabilidad de los diseños. Aprendí a diseñar y desarrollar componentes y portales flexibles y escalables, optimizar recursos y gestionar eficientemente los desafíos del diseño y el desarrollo.</p>
                    </div>
                </div>


                <div className="component-system__info maintenance">
                    <div>
                        <h4>Mantenimiento y obstáculos</h4>
                        <p> Tras la creación del sistema, el equipo de diseño UX/UI se desintegró temporalmente, lo que llevó a algunos desarrolladores, yo incluida, a asumir la responsabilidad de diseñar y desarrollar una serie de componentes y páginas según las necesidades de la empresa. Posteriormente, se integró un nuevo equipo de diseñadores UX/UI junior, quienes requirieron de nuestro apoyo y supervisión para validar los diseños de componentes y portales. En particular, desempeñé un papel clave en este proceso, ya que fui promovida a la posición de responsable del sistema de componentes y portales dentro del equipo de desarrollo.</p>
                    </div>
                </div>

                <div className="component-system__info catalogue">
                    <div>
                        <h4>Catálogo</h4>
                        <p>Ver una selección de algunos de los componentes pertenecientes al sistema creado:</p>
                        <button>
                            <a href="https://carla-ng.github.io/my-portfolio/subrepositories/components/components.html" target="_blank">Ir a Catálogo</a>
                        </button>
                    </div>
                </div>

            </div>


            <br/><br/><br/>
            
            <p>Ideas imagenes:</p>
            <ul>
                <li>Sistema de 12 columnas</li>
                <li>Algunos disenos en mobile uno pegado del otro, en diagonal. Como imagen separadora.</li>
                <li>Variables CSS para colores, tamanos de fuente, tipografias</li>
                <li>Preview Home</li>
            </ul>

        </div>
    );
};

export default ComponentSystem;