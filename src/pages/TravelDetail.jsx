import { useParams, Link } from "react-router-dom";

//importo componente viaggiatore
import TravelerCard from "../components/TravelerCard";

//importo dati
// import travelers from "../assets/data/travelerData";

const travelers = [
  {
    id: 1,
    travel_id: 3,
    firstName: "Mario",
    lastName: "Rossi",
    taxCode: "RSSMRA90A01H501X",
    email: "mario.rossi@email.com",
    phone: "3331000001",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 2,
    travel_id: 3,
    firstName: "Giulia",
    lastName: "Bianchi",
    taxCode: "BNCGLI85C41F205Z",
    email: "giulia.bianchi@email.com",
    phone: "3331000002",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 3,
    travel_id: 3,
    firstName: "Luca",
    lastName: "Verdi",
    taxCode: "VRDLCA92D15G273K",
    email: "luca.verdi@email.com",
    phone: "3331000003",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 4,
    firstName: "Sara",
    lastName: "Neri",
    taxCode: "NRISRA88M12H501T",
    email: "sara.neri@email.com",
    phone: "3331000004",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 5,
    firstName: "Davide",
    lastName: "Conti",
    taxCode: "CNTDVD91L22F205A",
    email: "davide.conti@email.com",
    phone: "3331000005",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 6,
    firstName: "Elena",
    lastName: "Galli",
    taxCode: "GLLELN87D45G273P",
    email: "elena.galli@email.com",
    phone: "3331000006",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 7,
    firstName: "Matteo",
    lastName: "Romano",
    taxCode: "RMNMTT93E18H501B",
    email: "matteo.romano@email.com",
    phone: "3331000007",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 8,
    firstName: "Chiara",
    lastName: "Ferrari",
    taxCode: "FRRCHR89R55F205C",
    email: "chiara.ferrari@email.com",
    phone: "3331000008",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 9,
    firstName: "Simone",
    lastName: "Moretti",
    taxCode: "MRTSMN94S30G273D",
    email: "simone.moretti@email.com",
    phone: "3331000009",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
  {
    id: 10,
    firstName: "Francesca",
    lastName: "Rinaldi",
    taxCode: "RNLFNC86T60H501E",
    email: "francesca.rinaldi@email.com",
    phone: "3331000010",
    emergencyContact: {
      name: "Luigi Rossi",
      phone: "3339000001",
    },
  },
];

function TravelDetail() {
  //recuper id del viaggio da url
  const { travel_id } = useParams();
  console.log(travel_id);

  //filtro array travelers per recuperare i viaggiatori solo del viaggio selezionato
  const filter_travelers = travelers.filter(
    (traveler) => parseInt(traveler.travel_id) === parseInt(travel_id),
  );

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
            {filter_travelers.map((traveler) => (
              <TravelerCard key={traveler.id} traveler={traveler} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
