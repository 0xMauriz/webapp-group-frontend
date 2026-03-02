import { useParams, Link } from "react-router-dom";
import { useState } from "react";
//importo componenti
import TravelerCard from "../components/TravelerCard";
import SearchBar from "../components/SearchBar";

//importo dati
import arrayViaggi from "./../data/tripData";

function TravelDetail() {
  //recuper id del viaggio da url
  const { travel_id } = useParams();

  const travel = arrayViaggi.find((travel) => travel.id == travel_id);
  const travelers = travel.travelerData;

  const [searchTraveler, setSearchTraveler] = useState("");

  //filtro array filter_travelers per vedere se ritornare solo i traveler ricercati
  const searched_travelers = travelers.filter(
    (traveler) =>
      traveler.firstName.toLowerCase().includes(searchTraveler.toLowerCase()) ||
      traveler.lastName.toLowerCase().includes(searchTraveler.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col border-bottom border-3 border-info">
          <h1>{travel.tripName}</h1>
          <h2>{travel.tutor}</h2>
          <p>
            {travel.tripStart} - {travel.tripEnd}
          </p>
        </div>
      </div>

      <div className="row ">
        <div className="col py-4 position-relative">
          <Link to={"/"}>
            <button
              type="button"
              className="btn btn-outline-primary fs-5 position-absolute end-0"
            >
              Lista Viaggi
            </button>
          </Link>
          <h1>Viaggiatori:</h1>
          <SearchBar search={searchTraveler} setSearch={setSearchTraveler} />
          <ul className="list-group list-group-flush">
            {searched_travelers.map((traveler) => (
              <TravelerCard key={traveler.id} traveler={traveler} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
