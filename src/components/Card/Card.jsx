import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({image, title, description, link, additionalClass, ariaHiddenValue, roleValue}) => {
    const combinedClass = `card ${additionalClass ? additionalClass : ''}`.trim()
    const pageLink = `/${link}`

    const accessibilityProps = {
        ...(ariaHiddenValue ? { 'aria-hidden': ariaHiddenValue } : {}),
        ...(roleValue ? { role: roleValue } : {}),
    }

    return (
        <article className={ combinedClass }>
            <Link to={ pageLink } { ...accessibilityProps }>
                <div className="card__img-container" style={{backgroundImage: `url(${image})`}}></div>

                <h2 className="card__title">{ title }</h2>
                
                <p className="card__description">{ description }</p>
            </Link>
        </article>
    )
}

export default Card;