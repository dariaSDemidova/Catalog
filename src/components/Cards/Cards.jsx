import Card from "../Card/Card";
import products from "../../products.json";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      {products.map((product, index) => (
        <Card key={index} data={product} />
      ))}
    </div>
  );
};

export default Cards;
