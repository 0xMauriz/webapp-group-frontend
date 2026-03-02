function TravelCard() {
  tripName,
    destination,
    tripDuration,
    tripStart,
    tripEnd
  return (
    <div>
      <p>
        <div key={trip.id} className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/286x180"
            className="card-img-top"
            alt="Immagine esempio"
          />

          <div className="card-body">
            <h5 className="card-title">{tripName}</h5>
            <p className="card-text">
              <strong>destination:</strong>{destination}
            </p>
          </div>

          <ul className="list-group list-group-flush">
            <p className="card-text">
              <strong>duration:</strong>{tripDuration}
            </p>
            <p className="card-text">
              <strong>Dates:</strong>{tripStart} - {tripEnd}
            </p>
          </ul>
        </div>
      </p>
    </div>
  );
}

export default TravelCard;