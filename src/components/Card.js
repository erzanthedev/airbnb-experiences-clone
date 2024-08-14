export default function Card(props) {
  console.log(props.user);
  let badgeText;
  if (props.user.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.user.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-image"
        src={`/assets/${props.user.coverImg}`}
        alt={props.user.title}
      />
      <div className="card-stats">
        <img className="card-star" src="/assets/star.png" alt="Star icon" />
        <span>{props.user.stats.rating}</span>
        <span className="gray">({props.user.stats.reviewCount}) • </span>
        <span className="gray">{props.user.location}</span>
      </div>
      <p className="card-title">{props.user.title}</p>
      <p className="card-price">
        <span className="bold ">From ${props.user.price} </span> / person
      </p>
    </div>
  );
}
