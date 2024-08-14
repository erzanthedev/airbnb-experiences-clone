import Star from "../assets/star.png";
import Katie from "../assets/katie-zaferes.png";

export default function Card(props) {
  return (
    <section className="card">
      <img className="card-image" src={Katie} alt="Katie Zaferes" />
      <div className="card-stats">
        <img className="card-star" src={Star} alt="Star icon" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray">• {props.location} </span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price} </span> / person
      </p>
    </section>
  );
}
