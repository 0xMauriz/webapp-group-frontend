import { useState } from "react"
import tripData from "../../src/data/tripData.js"
import TravelCard from "./TravelCard.jsx"

function TravelCardData() {

    const [trips, setTrips] = useState(tripData);

    return (

        <>
            {trips.map(trip => (
                <TravelCard
                    key={trip.id}
                    tripName={trip.tripName}
                    destination={trip.destination}
                    tripDuration={trip.tripDuration}
                    tripStart={trip.tripStart}
                    tripEnd={trip.tripEnd}
                />))}

        </>
    )

}

export default TravelCardData