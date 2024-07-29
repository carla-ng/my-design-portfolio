import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './ChallengeDetail.css';
import { challenges } from './ChallengeDetailData.js';
import useFadeIn from '../../hooks/useFadeIn';


const ChallengesDetail = () => {
    const fadeInClass = useFadeIn()
    const navigate = useNavigate()
    const { challengeId } = useParams()

    const challenge = challenges[challengeId]


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    if ( !challenge ) {
        return (
            <div id="challenge-detail" className="page">
                <div style={{ margin: '6rem auto', padding: '0 1rem', textAlign: 'center' }}>Reto no encontrado</div>

                <button className="go-back default" style={{ margin: '0 auto' }}>
                    <span className="default__text" onClick={() => navigate('/challenges')}>
                        <span>Volver a Retos</span>
                    </span>
                </button>
            </div>
        )
    }


    return (
        <div id="challenge-detail" className="page">

            <div className="introduction">
                <h1 className="introduction__title">
                    <span>{ challenge.title }</span>
                </h1>
            </div>

            <div className={`challenge-container ${fadeInClass}`}>

                <p>{ challenge.description }</p>

                <ul>
                    { challenge.items.map(( item, index ) => (
                        <li key={ index }>{ item }</li>
                    )) }
                </ul>

                <p>{ challenge.secondDescription }</p>

                <div className="challlenge__images">
                    { challenge.images1.map(( image, index ) => (
                        <img
                            key={ index }
                            className={`challenge__${image.type}${image.border ? ' border' : ''}${image.desktop ? ' desktop' : ''}`}
                            src={ image.src }
                            alt={ image.alt }
                        />
                    )) }
                </div>

                <p>{ challenge.additionalText }</p>

                <div className="challlenge__images">
                    { challenge.images2.map(( image, index ) => (
                        <img
                            key={ index }
                            className={`challenge__${image.type}${image.border ? ' border' : ''}${image.desktop ? ' desktop' : ''}`}
                            src={ image.src }
                            alt={ image.alt }
                        />
                    )) }
                </div>
            </div>

            <button className="go-back default">
                <span className="default__text" onClick={() => navigate('/challenges')}>
                    <svg className="default__icon" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m 12 2 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 l -6 6 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 6 6 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 s -0.105469 -0.519531 -0.292969 -0.707031 l -5.292969 -5.292969 l 5.292969 -5.292969 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 z m 0 0" fill="#2e3436"/>
                    </svg>
                    <span>Volver a Retos</span>
                </span>
            </button>
        </div>
    );
};

export default ChallengesDetail;
