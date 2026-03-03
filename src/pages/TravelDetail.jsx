import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import TravelerCards from "../components/TravelerCards";
import SearchBar from "../components/SearchBar";

//importo dati
import arrayViaggi from "./../data/tripData";

function TravelDetail() {
  // Logica per permettere l'aggiunta di nuovi viaggiatori nell'array e il rendering in pagina

  const [travelersList, setTravelersList] = useState(arrayViaggi);

  const [traveler, setTraveler] = useState({
    trip_id: "",
    travelerName: "",
    travelerSurname: "",
    taxCode: "",
    email: "",
    phone: "",
    emergencyContact: {
      name: "",
      phone: "",
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "emergencyName" || name === "emergencyPhone") {
      setTraveler((prev) => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [name === "emergencyName" ? "name" : "phone"]: value,
        },
      }));
    } else {
      setTraveler((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTravelersList((prevList) =>
      prevList.map((travel) =>
        travel.id == travel_id
          ? {
            ...travel,
            travelerData: [...travel.travelerData, traveler],
          }
          : travel,
      ),
    );

    setTraveler({
      trip_id: "",
      firstName: "",
      lastName: "",
      taxCode: "",
      email: "",
      phone: "",
      emergencyContact: {
        name: "",
        phone: "",
      },
    });
  }

  console.log(travelersList);

  //recuper id del viaggio da url

  const { travel_id } = useParams();

  const travel = travelersList.find((travel) => travel.id == travel_id);
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
          <h1 className=" text-success text-center fs-1 fw-bolder">
            {travel.tripName}
          </h1>
          <h4 className="fst-italic text-end">
            Accompagnatore: {travel.tutor}
          </h4>
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
              className="btn btn-outline-success fs-5 position-absolute end-0 "
            >
              Lista Viaggi
            </button>
          </Link>
          <h1>Viaggiatori:</h1>
          <SearchBar
            search={searchTraveler}
            setSearch={setSearchTraveler}
            className
          />
          <ul className="list-group list-group-flush">
            {searched_travelers.map((traveler) => (
              <TravelerCards key={traveler.id} traveler={traveler} />
            ))}
          </ul>
        </div>
        <div className="container d-lg-block">
          <div className="card m-5 p-3 bg-secondary">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="trip-id" className="form-label">
                  Immettere id del viaggio a cui il viaggiatore è
                  associato:{" "}
                </label>
                <input
                  name="trip_id"
                  type="text"
                  className="form-control"
                  id="trip-id"
                  aria-describedby="emailHelp"
                  value={traveler.trip_id}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nome-viaggiatore" className="form-label">
                  Immettere nome del viaggiatore:{" "}
                </label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="traveler-name"
                  value={traveler.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="traveler-surname">
                  Immettere cognome del viaggiatore:{" "}
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="traveler-surname"
                  value={traveler.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tax-code" className="form-label">
                  Immettere codice fiscale del viaggiatore:{" "}
                </label>
                <input
                  name="taxCode"
                  type="text"
                  className="form-control"
                  id="tax-code"
                  value={traveler.taxCode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="traveler-email" className="form-label">
                  Immettere indirizzo Mail:{" "}
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="traveler-email"
                  aria-describedby="emailHelp"
                  value={traveler.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="traveler-phone" className="form-label">
                  Immettere numero di telefono del viaggiatore:{" "}
                </label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  id="traveler-phone"
                  value={traveler.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emergency-name" className="form-label">
                  Immettere nome proprietario del numero di telefono di
                  emergenza del viaggiatore:{" "}
                </label>
                <input
                  name="emergencyName"
                  type="text"
                  className="form-control"
                  id="emergency-name"
                  value={traveler.emergencyContact.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emergency-number" className="form-label">
                  Immettere numero di telefono del proprietario del numero di
                  telefono di emergenza del viaggiatore:{" "}
                </label>
                <input
                  name="emergencyPhone"
                  type="text"
                  className="form-control"
                  id="emergency-number"
                  value={traveler.emergencyContact.phone}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-light my-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
