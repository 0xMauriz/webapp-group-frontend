function TravelCard(props) {
  const { image, tripName, destination, tripDuration, tripStart, tripEnd } =
    props;

  return (
    <div className="travel-card card p-3">
      <img
        src={`/imgs/${image}`}
        className="card-img-top card-img-trip"
        alt="Immagine esempio"
      />

      <div className="card-body">
        <h5 className="fw-bold">{tripName}</h5>
        <p className="card-text">
          <strong>Destination: </strong>
          {destination}
        </p>
      </div>

      <ul>
        <li className="card-text">
          <strong>Duration: </strong>
          {tripDuration}
        </li>
        <li className="card-text">
          <strong>Dates: </strong>
          {tripStart} - {tripEnd}
        </li>
      </ul>
    </div>
  );
}

export default TravelCard;
