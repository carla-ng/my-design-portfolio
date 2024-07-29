import './Contact.css';

import { useEffect } from 'react';
import useFadeIn from '../../hooks/useFadeIn';


const Contact = () => {
    const fadeInClass = useFadeIn()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    return (
        <div id="contact" className="page">

            <div className="introduction">
                <h1 className="introduction__title">
                    <span>Mis redes</span>
                </h1>
            </div>

            <div className="contact-container">
                <p>Si deseas contactar conmigo, me podrás encontrar en:</p>

                <div>
                    <a className={`contact__link linkedin ${fadeInClass}`} href="https://www.linkedin.com/in/carla-nardone-gonzalez/" target="_blank">
                        Linkedin
                    </a>

                    <a className={`contact__link github ${fadeInClass}`} href="https://github.com/carla-ng/" target="_blank">
                        GitHub
                    </a>

                    <a className={`contact__link instagram ${fadeInClass}`} href="https://www.instagram.com/carlanargon/" target="_blank">
                        Instagram
                    </a>

                    <a className={`contact__link tiktok ${fadeInClass}`} href="https://www.tiktok.com/@carlanargon/" target="_blank">
                        Tiktok
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;