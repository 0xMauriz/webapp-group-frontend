import { useState } from "react"
import tripData from "../data/tripData.js"
import TravelerCard from "./TravelerCard.jsx"

function TravelCardData() {

    const [trips, setTrips] = useState([]);

    setTrips(tripData);

    return (

        <>
            {trips.map(trip => (
                <TravelerCard
                    key={trip.id}
                    tripName={trip.tripName}
                    destination={trip.destination}
                    tripDuration={trip.tripDuration}
                    tripStart={trip.tripStart}
                    tripEnd={trip.tripStart}
                    travelersData={trip.travelersData}
                />))}

        </>
    )

}

export default TravelCardData