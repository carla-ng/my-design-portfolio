import './Card.css';

const Card = ({image, title, description, additionalClass}) => {
    const defaultClass = 'card'
    const combinedClass = `${defaultClass} ${additionalClass ? additionalClass : ''}`.trim();

    return (
        <article className={ combinedClass }>
            <figure className="card__img-container">
                <img src={ image } alt="Card photo"/>
            </figure>

            <h4 className="card__title">{ title }</h4>
            
            <p className="card__description">{ description }</p>
        </article>
    )
}

export default Card;