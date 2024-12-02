import fire from "/assets/icons/fire.svg";
import "./Card.scss";

const Card = ({ data }) => {
  const {
    isHit,
    discount,
    image,
    brand,
    title,
    currentPrice,
    totalPrice,
    isAvailable,
  } = data;

  return (
    <a href="#" className={`card ${!isAvailable ? "inactive" : ""}`}>
      <div className="card__image-container">
        {isHit && (
          <div className="card__hit">
            <div className="card__hit-text">Хит продаж</div>
            <img className="card__hit-image" src={fire} alt="fire" />
          </div>
        )}
        {discount && <div className="card__discount">{discount}%</div>}
        <img className="card__image" src={image} alt="product" />
      </div>
      <div className="card__text">
        <div className="card__brand">{brand}</div>
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__price">
        <p className="card__price-current">{currentPrice} ₽</p>
        {totalPrice && <p className="card__price-total">{totalPrice} ₽</p>}
      </div>
      {isAvailable ? (
        <button className="card__button">Купить</button>
      ) : (
        <button className="card__button-inactive">
          Сообщить о поступлении
        </button>
      )}
    </a>
  );
};

export default Card;
