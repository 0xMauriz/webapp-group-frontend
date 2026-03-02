import { useParams, Link } from "react-router-dom";

//importo componente viaggiatore
import TravelerCard from "../components/TravelerCard";

//importo dati
import arrayViaggi from "./../data/tripData";

function TravelDetail() {
  //recuper id del viaggio da url
  const { travel_id } = useParams();
  console.log(travel_id);

  const travel = arrayViaggi.find((travel) => travel.id == travel_id);
  const travelers = travel.travelerData;

  console.log(travelers);

  return (
    <div className="container">
      <div className="row">
        <div className="col border-bottom border-3 border-info">
          <h1>Viaggio</h1>
          <h2>Accompagntore</h2>
          <p>Data_inizio - Data_fine</p>
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
          <ul className="list-group list-group-flush">
            {travelers.map((traveler) => (
              <TravelerCard key={traveler.id} traveler={traveler} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
