import cardstyles from './Card.module.css';

const Card = ({image, name, price, description}) => (
    <div className={cardstyles.card}>
      <div className={cardstyles.front}>
        <img src={image} alt="Product Image" className={cardstyles.cardImage} />
        <div className={cardstyles.container}>
          <h3><span className={cardstyles.name}>{name}</span></h3> 
          <h3><span className={cardstyles.price}>{price}₪</span></h3> 
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

export default Card;
