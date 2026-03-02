import { useParams, Link } from "react-router-dom";
import { useState } from "react";
//importo componenti
import NewTravelerFrom from "../components/newTravelerForm"
import TravelerCards from "../components/TravelerCards";
import SearchBar from "../components/SearchBar";
import NewTripSubmitForm from "../components/newTripSubmitForm";

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
    <div className="container py-5">
      <div className="row">
        <div className="col border-bottom border-3 border-success">
          <h1 className=" text-success text-center fs-1 fw-bolder">{travel.tripName}</h1>
          <h4 className="fst-italic text-end">Accompagnatore: {travel.tutor}</h4>
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
              <TravelerCards key={traveler.id} traveler={traveler} />
            ))}
          </ul>
        </div>
      </div>
      <NewTripSubmitForm />

      <NewTravelerFrom />
    </div>
  );
}

export default TravelDetail;
