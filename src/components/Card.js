import Star from "../assets/star.png";
import Katie from "../assets/katie-zaferes.png";

export default function Card() {
  return (
    <section className="card">
      <img className="card-image" src={Katie} alt="Katie Zaferes" />
      <div className="card-stats">
        <img className="card-star" src={Star} alt="Star icon" />
        <span> 5.0 </span>
        <span className="gray"> (6) </span>
        <span className="gray">• USA </span>
      </div>
      <h2>Life lessons with Katie Zaferes</h2>
      <p>
        <span className="bold">From $136 </span> / person
      </p>
    </section>
  );
}
