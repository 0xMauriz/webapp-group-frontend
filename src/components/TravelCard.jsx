function TravelCard(props) {
  const { image, tripName, destination, tripDuration, tripStart, tripEnd } = props;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`/public/imgs/` + image}
          className="card-img-top"
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
    </div>
  );
}

export default TravelCard;
