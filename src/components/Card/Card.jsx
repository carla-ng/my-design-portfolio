import './Card.css';

const Card = ({image, title, description, additionalClass}) => {
    const combinedClass = `card ${additionalClass ? additionalClass : ''}`.trim();
    const imageAlt = `${title} preview`

    return (
        <article className={ combinedClass }>
            <figure className="card__img-container">
                <img src={ image } alt={ imageAlt }/>
            </figure>

            <h4 className="card__title">{ title }</h4>
            
            <p className="card__description">{ description }</p>
        </article>
    )
}

export default Card;