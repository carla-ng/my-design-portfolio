import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({image, title, description, link, additionalClass}) => {
    const combinedClass = `card ${additionalClass ? additionalClass : ''}`.trim()
    const pageLink = `/${link}`

    return (
        <article className={ combinedClass }>
            <Link to={ pageLink }>
                <div className="card__img-container" style={{backgroundImage: `url(${image})`}}></div>

                <h4 className="card__title">{ title }</h4>
                
                <p className="card__description">{ description }</p>
            </Link>
        </article>
    )
}

export default Card;