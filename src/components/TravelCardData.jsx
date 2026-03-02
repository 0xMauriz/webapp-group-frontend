import { useState } from "react";
import { Link } from "react-router-dom";
import arrayViaggi from "../../src/data/tripData.js";
import TravelCard from "./TravelCard.jsx";

function TravelCardData() {
  const [trips, setTrips] = useState(arrayViaggi);

  return (
    <div className="row">
      <div className="col">
        {trips.map((trip) => (
          <Link to={`/travel/${trip.id}`}>
            <TravelCard
              key={trip.id}
              tripName={trip.tripName}
              destination={trip.destination}
              tripDuration={trip.tripDuration}
              tripStart={trip.tripStart}
              tripEnd={trip.tripEnd}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TravelCardData;
