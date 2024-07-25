import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    
    const toggleVisibility = () => {
        if ( window.scrollY > 300 ) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])


    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            { isVisible && 
                <button onClick={ scrollToTop }>
                    <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#000000" /></svg>
                </button>
            }
        </div>
    );
};

export default ScrollToTopButton;
