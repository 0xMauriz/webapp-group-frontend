import { useState } from "react";
import { Link } from "react-router-dom";
import arrayViaggi from "../../src/data/tripData.js";
import TravelCard from "./TravelCard.jsx";

function TravelCardData() {

  const [trips, setTrips] = useState(arrayViaggi);

  return (
    <div className="container text-center ">
      <div className="row justify-content-center gap-5">
        {trips.map((trip) => (
          <div key={trip.id} className="col-md-4">
            <Link to={`/travel/${trip.id}`}>
              <TravelCard
                tripName={trip.tripName}
                destination={trip.destination}
                tripDuration={trip.tripDuration}
                tripStart={trip.tripStart}
                tripEnd={trip.tripEnd}
                image={trip.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelCardData;
