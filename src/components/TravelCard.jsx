function TravelCard(props) {
  const { image, tripName, destination, tripDuration, tripStart, tripEnd } =
    props;

  return (
    <div className="card">
      <img
        src={`/imgs/${image}`}
        className="card-img-top card-img-trip"
        alt="Immagine esempio"
      />

      <div className="card-body">
        <h5 className="card-title">{tripName}</h5>
        <p className="card-text">
          <strong>destination:</strong>
          {destination}
        </p>
      </div>

      <ul className="list-group list-group-flush">
        <p className="card-text">
          <strong>duration:</strong>
          {tripDuration}
        </p>
        <p className="card-text">
          <strong>Dates:</strong>
          {tripStart} - {tripEnd}
        </p>
      </ul>
    </div>
  );
}

export default TravelCard;
