export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={`/assets/${props.img}`}
        alt={props.title}
      />
      <div className="card-stats">
        <img className="card-star" src="/assets/star.png" alt="Star icon" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold ">From ${props.price} </span> / person
      </p>
    </div>
  );
}
