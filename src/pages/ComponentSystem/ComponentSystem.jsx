import './ComponentSystem.css';
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
                    Como desarrolladora web, fui parte integral de un proyecto para crear un sistema de componentes para nuestras plataformas. Colaboré estrechamente con el equipo de diseño UX/UI, proporcionando ideas, feedback técnico, respondiendo consultas y asegurando que los diseños fueran implementables y accesibles. Además, tuve la oportunidad de diseñar y crear componentes y páginas adicionales según las necesidades del proyecto.
                </p>
            </div>

            <div className="component-system-container">

            

            <br/>
            <hr/>
            <br/><br/>

            <p><strong>Antecedentes</strong>: La empresa contaba con un sistema de componentes y portales, el cual era configurable desde un CMS propio interno. Sin embargo, este sistema ofrecía poca flexibilidad. Había una cantidad limitada de plantillas de portales, con layouts preestablecidos y reutilizados para numerosos portales, y sus componentes eran similares y apenas se podían modificar.</p>

            <p><strong>Problema</strong>: Esta limitación hacía que los diferentes portales creados con la misma plantilla fueran muy similares, presentando sólo pequeñas diferencias. Era necesario un sistema que permitiera mayor libertad en la creación de layouts para las páginas de los portales, para lograr una mayor variedad.</p>

            <p><strong>Objetivo</strong>: Crear un nuevo sistema de componentes y portales más flexible. En primer lugar, desarrollar nuevos componentes que permitan una mayor variedad de diseños. En segundo lugar, implementar un editor que facilite la configuración de los layouts de cada página y la distribución de los componentes. El sistema debe ser escalable, permitiendo la incorporación continua de nuevos componentes y la expansión del catálogo a lo largo del tiempo.</p>

            <p><strong>Equipos involucrados</strong>: Product Owner, Desarrolladores, Diseñadores UX/UI, QA Testers</p>

            <br/>
            <hr/>
            <br/><br/>

            <p><b>12 Columnas</b>: Al inicio del proyecto, los desarrolladores recomendamos a los diseñadores basarse en un sistema de 12 columnas para los layouts y componentes del nuevo sistema, similar al de Bootstrap. Este enfoque proporciona una estructura flexible que facilita la adaptación a diferentes dispositivos, mejora la consistencia visual y simplifica el desarrollo y mantenimiento. Además, establece reglas claras para la alineación y el espaciado, lo que agiliza el proceso de diseño y mejora la colaboración entre equipos.</p>
            <br/>

            <br/>
            <p><b>Sólo diseños de mobile y desktop</b>: Se estableció que los diseñadores UX/UI realizarían los diseños de portales y componentes únicamente en formatos móvil y desktop, utilizando 768px como breakpoint. Esta decisión se basó en un estudio de tráfico que reveló que la mayoría de nuestros usuarios accedían a los portales desde dispositivos móviles, mientras que el resto utilizaba principalmente ordenadores. Esta estrategia permite optimizar los recursos de diseño y desarrollo, enfocándose en los dispositivos más utilizados por nuestros usuarios.</p>
            <br/>

            <br/>
            <p><b>Variantes y Prioridades</b>: Se realizaron diversas pruebas para determinar cómo diseñar los componentes con mayor flexibilidad. Finalmente, se decidió que cada componente podría tener múltiples variantes, permitiendo diferentes &quot;versiones&quot; de un mismo componente. Estas variantes podrían diferir en CSS o incluso en aspectos más importantes de la estructura HTML. Además, se establecieron &quot;prioridades&quot; para los componentes, lo que facilita que en una misma página un componente pueda aparecer en una versión más grande (con mayor prioridad) y en una versión más pequeña (con menor prioridad), optimizando así la adaptabilidad y el diseño responsivo.</p>
            <br/>

            <br/>
            <p><b>Skins</b>: Para proporcionar flexibilidad y variedad a los componentes y portales, se implementó el concepto de &quot;skins&quot;. Un skin es un archivo CSS que define variables para colores, tipografías y otras características visuales del portal. Aunque esta funcionalidad ya existía en el sistema anterior, se decidió mantenerla y mejorarla, ofreciendo una mayor definición y personalización para los portales.</p>
            <br/>

            <br/>
            <p><b>Lo que aprendí</b>: A lo largo del proceso, logré adquirir valiosas habilidades en colaboración interdisciplinaria, trabajando de cerca con equipos de diseño UX/UI para integrar feedback técnico y asegurar la viabilidad de los diseños. Aprendí a diseñar y desarrollar componentes y portales flexibles y escalables, optimizar recursos y gestionar eficientemente los desafíos del diseño y el desarrollo.</p>
            <br/>

            <br/>
            <p><b>Mantenimiento y obstáculos:</b>: Tras la creación del sistema, el equipo de diseño UX/UI se desintegró temporalmente, lo que llevó a algunos desarrolladores, yo incluida, a asumir la responsabilidad de diseñar y desarrollar una serie de componentes y páginas según las necesidades de la empresa. Posteriormente, se integró un nuevo equipo de diseñadores UX/UI junior, quienes requirieron de nuestro apoyo y supervisión para validar los diseños de componentes y portales. En particular, desempeñé un papel clave en este proceso, ya que fui promovida a la posición de responsable del sistema de componentes y portales dentro del equipo de desarrollo.</p>
            <br/>

            <br/>
            <p><b>Catálogo</b>: ver una selección de algunos de los componentes pertenecientes al sistema creado:</p>
            <button>
                <a href="https://carla-ng.github.io/my-portfolio/subrepositories/components/components.html" target="_blank">Ir a catálogo</a>
            </button>
            <br/>

            </div>

        </div>
    )
}

export default ComponentSystem;