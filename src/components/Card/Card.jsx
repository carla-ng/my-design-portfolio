import './Card.css';

const Card = ({image, title, description}) => {
    return (
        <article className="card">
            <figure className="card__img-container">
                <img src={ image } alt="Card photo"/>
            </figure>

            <h4 className="card__title">{ title }</h4>
            
            <p className="card__description">{ description }</p>
        </article>
    )
}

export default Card;