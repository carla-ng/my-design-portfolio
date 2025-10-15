import './Contact.css';

import { useEffect } from 'react';
import useFadeIn from '../../hooks/useFadeIn';


const Contact = () => {
    const fadeInClass = useFadeIn()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    return (
        <section id="contact" className="page">

            <header className="introduction">
                <h1 className="introduction__title">
                    <span>Mis redes</span>
                </h1>
            </header>

            <section className="contact-container">
                <p>Si deseas contactar conmigo, me podrás encontrar en:</p>

                <nav aria-label="Mis redes sociales">
                    <ul className="contact-list">
                        <li>
                            <a className={`contact__link linkedin ${fadeInClass}`} href="https://www.linkedin.com/in/carla-nardone-gonzalez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                Linkedin
                            </a>
                        </li>

                        {/*
                        <li>
                            <a className={`contact__link github ${fadeInClass}`} href="https://github.com/carla-ng/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                GitHub
                            </a>
                        </li>
                        */}

                        <li>
                            <a className={`contact__link instagram ${fadeInClass}`} href="https://www.instagram.com/carlanargon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                Instagram
                            </a>
                        </li>

                        <li>
                            <a className={`contact__link tiktok ${fadeInClass}`} href="https://www.tiktok.com/@carlanargon/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                TikTok
                            </a>
                        </li>

                        <li>
                            <a className={`contact__link artstation ${fadeInClass}`} href="https://www.artstation.com/carlanargon/" target="_blank" rel="noopener noreferrer" aria-label="ArtStation">
                                ArtStation
                            </a>
                        </li>
                        
                    </ul>
                </nav>
                
            </section>
        </section>
    );
};

export default Contact;