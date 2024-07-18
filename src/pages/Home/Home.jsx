import ChallengesImage from '../../assets/images/home/project_challenges.jpg';
import './Home.css';

import Card from '../../components/Card/Card.jsx';


const Home = () => {
    return (
        <div id="home" className="page">

            <div className="introduction">
                <h1 className="introduction__title">¡Hola! Soy Carla Nardone</h1>
                <p className="introduction__text">
                    Después de trabajar como <span className="highlighted-text">Desarrolladora Web</span> durante años y colaborar estrechamente con Diseñadores, descubrí mi pasión por el <span className="highlighted-text">Diseño UX/UI</span>. Fue así como decidí explorar este campo para combinar mis habilidades técnicas y creativas{/*, ofreciendo experiencias de usuario excepcionales*/}. Aquí encontrarás algunos ejemplos de mis proyectos.
                </p>
            </div>

            <div className="projects-container">
                <Card image={ ChallengesImage } title="Title Project #1" description="Quis occaecat occaecat deserunt id eiusmod do ad laboris sunt pariatur elit aute. Quis pariatur occaecat nulla in mollit officia labore reprehenderit elit aliquip velit exercitation enim tempor. Aute id elit magna et consectetur irure eiusmod proident."  />

                <Card image={ ChallengesImage } title="Title Project #2" description="Voluptate velit et pariatur fugiat veniam irure duis laborum ea anim tempor ullamco cupidatat est. Magna labore qui incididunt enim excepteur Lorem elit mollit cupidatat id dolore cillum. Dolor anim eiusmod elit incididunt in incididunt veniam non non."  />
            </div>
            
        </div>
    );
};

export default Home;
