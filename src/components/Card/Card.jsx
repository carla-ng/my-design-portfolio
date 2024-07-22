import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({image, title, description, link, additionalClass}) => {
    const combinedClass = `card ${additionalClass ? additionalClass : ''}`.trim();
    const imageAlt = `${title} preview`

    const pageLink = `/${link}`

    return (
        <article className={ combinedClass }>
            <Link to={ pageLink }>
                <figure className="card__img-container">
                    <img src={ image } alt={ imageAlt }/>
                </figure>

                <h4 className="card__title">{ title }</h4>
                
                <p className="card__description">{ description }</p>
            </Link>
        </article>
    )
}

export default Card;