
import tripData from "../data/tripData"


function Homepage() {
  return (
    <>
      
        {tripData.map((trip) => (
        <div key={trip.id} className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/286x180"
          className="card-img-top"
          alt="Immagine esempio"
        />

        <div className="card-body">
          <h5 className="card-title">{trip.tripName}</h5>
          <p className="card-text">
            <strong>destination:</strong>{trip.destination}
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <p className="card-text">
            <strong>tutor:</strong>{trip.tutor}
          </p>
          <p className="card-text">
            <strong>duration:</strong>{trip.duration}
          </p>
          <p className="card-text">
            <strong>Dates:</strong>{trip.start} - {trip.tripEnd}
          </p>
        </ul>

        <div className="card-body">
          <a href="/" className="card-link">Link 1</a>
          <a href="/" className="card-link">Link 2</a>
       
        </div>
      </div>
        ))}
       </>
  );
}

export default Homepage;
