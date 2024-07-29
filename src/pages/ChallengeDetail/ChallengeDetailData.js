import SignUpSketch from '../../assets/images/challenges/signup_sketch.jpg';
import SignUpWireframe from '../../assets/images/challenges/signup_wireframe.jpg';
import SignUpMockup1 from '../../assets/images/challenges/signup_mockup1.jpg';
import SignUpMockup2 from '../../assets/images/challenges/signup_mockup2.jpg';

import CheckoutSketch from '../../assets/images/challenges/checkout_sketch.jpg';
import CheckoutWireframe from '../../assets/images/challenges/checkout_wireframe.jpg';
import CheckoutMockup from '../../assets/images/challenges/checkout_mockup.jpg';

import CalculatorSketch from '../../assets/images/challenges/calculator_sketch.jpg';
import CalculatorWireframe from '../../assets/images/challenges/calculator_wireframe.jpg';
import CalculatorMockup from '../../assets/images/challenges/calculator_mockup.jpg';

import HomepageSketch from '../../assets/images/challenges/homepage_sketch.jpg';
import HomepageWireframe from '../../assets/images/challenges/homepage_wireframe.jpg';
import HomepageMockup from '../../assets/images/challenges/homepage_mockup.jpg';


export const challenges = {
    'signup': {
        title: 'Crear Cuenta',

        description: 'Al inicio del proceso hice un brainstorming y listé distintos aspectos a tomar en cuenta, independientemente de si serían incluidos en el diseño final o no:',

        items: [
            'Logo/nombre de la app.',
            'Título de Crear Cuenta e instrucciones.',
            'Inputs para nombre de usuario, email y clave.',
            'Opciones de Registro: incluir múltiples opciones de registro para mayor flexibilidad, permitiendo a los usuarios registrarse utilizando su correo electrónico o a través de Google (Gmail). Esta funcionalidad asegura que los usuarios puedan elegir el método de registro que les resulte más conveniente.',
            'Aceptar términos y condiciones, y políticas de privacidad.',
            'Botón de Crear Cuenta.',
            'Validación de Campos: implementar validación de los inputs del formulario para asegurar la correcta entrada de datos. Considerar utilizar bordes de colores (verde para correcto y rojo para incorrecto) alrededor de los inputs para proporcionar retroalimentación visual inmediata, además de añadir iconos de check y X para indicar la validez de cada campo. De esta manera, será más accesible para los distintos tipos de usuario. En caso de recibir un feedback incorrecto, se colocará el error debajo del input para que el usuario pueda solucionarlo.',
            'Mostrar nivel de seguridad de la clave introducida.',
        ],

        secondDescription: 'Una vez tuve claro todas las cosas que podría incluir el signup, realicé varios sketches, hasta quedarme con una versión final. Seguidamente, creé en Figma un wireframe en base al sketch.',

        images1: [
            {
                src: SignUpSketch,
                alt: 'Sketch de Crear Cuenta hecho a mano',
                type: 'sketch'
            },
            {
                src: SignUpWireframe,
                alt: 'Wireframe de Crear Cuenta hecho en Figma',
                type: 'wireframe',
                border: true
            }
        ],

        additionalText: 'Finalmente, creé en Figma el mockup del diseño final, utilizando una paleta de colores inspirada en una estética popular dentro del mundo de los videojuegos, con un fondo negro complementado por detalles en morado.',

        images2: [
            {
                src: SignUpMockup1,
                alt: 'Mockup final de Crear Cuenta hecho en Figma',
                type: 'mockup'
            },
            {
                src: SignUpMockup2,
                alt: 'Mockup final de Crear Cuenta con feedback de formulario hecho en Figma',
                type: 'mockup'
            }
        ]
    },
    
    'checkout': {
        title: 'Checkout',

        description: 'Para organizar mejor los elementos a tomar en cuenta para el diseño, he creado el siguiente listado:',

        items: [
            'Logo/nombre de la marca.',
            'Título de "Checkout"',
            'Botón/Flecha para volver a la página anterior.',
            'Resumen de la orden de compra: nombre de objetos, imágenes, tamaños, colores, cantidades, precios, precio total.',
            'Opción de editar objetos de compra: se puede disminuir o aumentar la cantidad de un objeto a comprar, también se pueden eliminar.',
            'Información del cliente: email y número de teléfono para confirmación de compra y actualizaciones, dirección de envió incluyendo calle, ciudad, código postal, país.',
            'Dirección de facturación: se podrá elegir la misma que la de envío o introducir una distinta.',
            'Método de envío: distintas opciones con tiempos de espera estimados, a distintos precios.',
            'Información de pago: tarjeta de crédito/débito, paypal, otro.',
            'Botón de realizar/finalizar compra: su texto debe estar muy bien pensado para que el usuario entienda que, al hacer click en el botón, se finalizará el proceso de compra y se realizará el cobro.',
            'Otros elementos opcionales: código de descuento, link o información de contacto para atención al cliente en caso de incidencias, aceptar términos y condiciones, obtener puntos por la compra.',
        ],

        secondDescription: 'Este caso fue más complejo que otros y ha tomado más tiempo decidir los elementos a incluir en la página, en especial porque un proceso de pago puede resultar más delicado o estresante para el usuario y necesita estar todo más claro.',

        images1: [
            {
                src: CheckoutSketch,
                alt: 'Sketch de Checkout hecho a mano',
                type: 'sketch'
            },
            {
                src: CheckoutWireframe,
                alt: 'Wireframe de Checkout hecho en Figma',
                type: 'wireframe',
                border: true
            }
        ],

        additionalText: 'El mockup del diseño final con Figma, manteniendo un estilo claro y limpio:',

        images2: [
            {
                src: CheckoutMockup,
                alt: 'Mockup final de Checkout hecho en Figma',
                type: 'mockup',
                border: true
            }
        ]
    },

    'calculator': {
        title: 'Calculadora',

        description: 'Al ser para niños, tendría que priorizar las operaciones básicas que se suelen realizar a edades más tempranas, como lo son: suma, resta, multiplicación y división. Y tendría que mantener el diseño muy simple y agregar colores para resaltar distintos tipos de botones. Así mi listado de puntos a tomar en cuenta ha sido algo más reducido que de costumbre:',

        items: [
            'Algunas operaciones/acciones básicas: suma, resta, multiplicación, división, porcentaje, borrar.',
            'Ver si es necesario agregar alguna operación más avanzada.',
            'Posibilidad de modo claro y modo oscuro, o hacer uno único con colores llamativos.',
            'Tomar tiempo para estudiar ubicación de los botones, incluyendo los números, para que sean fáciles de ubicar y no logren confundirse entre sí.',
        ],

        secondDescription: 'Decidí agregar el diseño de un animal para hacerlo más llamativo. Elegí el gato ya que es un gran conocido y favorito entre niños:',

        images1: [
            {
                src: CalculatorSketch,
                alt: 'Sketch de la Calculadora hecho a mano',
                type: 'sketch'
            },
            {
                src: CalculatorWireframe,
                alt: 'Wireframe de la Calculadora hecho en Figma',
                type: 'wireframe'
            }
        ],

        additionalText: 'A diferencia de lo que se suele hacer con los diseños para gente de más edad, decidí agregar más elementos y colores al diseño final:',

        images2: [
            {
                src: CalculatorMockup,
                alt: 'Mockup final de la Calculadora hecho en Figma',
                type: 'mockup'
            }
        ]
    },

    'homepage': {
        title: 'Homepage',

        description: 'Para este caso tuve que realizar un estudio más exhaustivo de plataformas de cursos online, y he podido notar que los diseños suelen variar muchísimo entre una y otra. Por lo tanto, he tenido que hacer un análisis de cuáles serían las secciones más relevantes que podrían captar la atención de creativos que estén considerando unirse. Finalmente me he quedado con el siguiente listado:',

        items: [
            'Header con logo, navegación y login.',
            'Hero: imagen e introducción al sitio web, CTA para suscribirse.',
            'Compañías con las que estamos trabajando / que confían en nosotros.',
            'Sobre nosotros.',
            'Cursos populares entre los usuarios.',
            'Testimonios.',
            'Top de categorías.',
            'Precios: en caso de ser todo accesible con un único pago por mes/año/etc. También podría ser gratis unirse, y luego el usuario tendría que pagar por los cursos que desea poder acceder.',
            'Segundo CTA para suscribirse.',
            'Footer.',
        ],

        secondDescription: 'Realicé varios sketches para probar distintas maneras de ordenar las secciones que quería incluir, hasta que finalmente me he quedado con la siguiente opción:',

        images1: [
            {
                src: HomepageSketch,
                alt: 'Sketch de la Homepage hecho a mano',
                type: 'sketch',
                desktop: true
            },
            {
                src: HomepageWireframe,
                alt: 'Wireframe de la Homepage hecho en Figma',
                type: 'wireframe',
                border: true,
                desktop: true
            }
        ],

        additionalText: 'Hay un par de puntos a destacar en la creación de este diseño, como el hecho de que he querido agregar más color y algunas ilustraciones, que podrían ser más llamativas para alguien interesado en la temática de la plataforma. También, he probado distintos textos a incluir en el CTA, hasta que he optado por la opción de "Join for free", ya que se deja claro al usuario que no tendrá costo alguno el apuntarse.',

        images2: [
            {
                src: HomepageMockup,
                alt: 'Mockup final de la Homepage hecho en Figma',
                type: 'mockup',
                border: true,
                desktop: true
            }
        ]
    },
};
