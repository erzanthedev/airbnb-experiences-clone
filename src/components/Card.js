export default function Card(props) {
  const { openSpots, location, title, coverImg, stats, price } = props;
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-image" src={`/assets/${coverImg}`} alt={title} />
      <div className="card-stats">
        <img className="card-star" src="/assets/star.png" alt="Star icon" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-price">
        <span className="bold ">From ${price} </span> / person
      </p>
    </div>
  );
}
