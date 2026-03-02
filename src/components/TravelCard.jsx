function TravelCard(props) {

  const { id, tripName, destination, tripDuration, tripStart, tripEnd, travelersData } = props;


  return (
    <div>
      <h1>nome cognome</h1>
      <p>
        {tripName}
        {destination}
        {tripDuration}
        {tripStart}
        {tripEnd}
      </p>
    </div>
  );
}

export default TravelCard;
