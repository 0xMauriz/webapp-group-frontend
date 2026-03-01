function TravelerCard({ traveler }) {
  //destrutturo oggetto traveler
  const { id, firstName, lastName, taxCode, email, phone, emergencyContact } =
    traveler;
  return (
    <>
      <li
        className="list-group-item list-group-item-action fs-3"
        onClick={() => {
          document
            .getElementById(`container-traveler-${id}`)
            .classList.add("overlay");
          document
            .getElementById(`container-traveler-${id}`)
            .classList.remove("d-none");
          document.querySelector("body").classList.add("hidden");
        }}
      >
        {firstName} {lastName}
      </li>
      <div className="row">
        <div
          id={`container-traveler-${id}`}
          className="col d-flex align-items-center justify-content-center d-none"
        >
          <div className="container-traveler ">
            <div className="row">
              <div className="col">
                {" "}
                <div className="card mb-3 card-traveler bg-black">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img
                        src={`/img_travelers/${taxCode}.jpg`}
                        className="img-fluid rounded-start img_travel_card"
                        alt="immagine viaggiatore"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">
                          {firstName} {lastName}
                        </h5>
                        <ul className="card-text">
                          <li>Phone: {phone}</li>
                          <li>Email: {email}</li>
                          <li>C.F. {taxCode}</li>
                        </ul>

                        <button
                          onClick={() => {
                            document
                              .getElementById(`container-traveler-${id}`)
                              .classList.remove("overlay");
                            document
                              .getElementById(`container-traveler-${id}`)
                              .classList.add("d-none");
                            document
                              .querySelector("body")
                              .classList.remove("hidden");
                          }}
                        >
                          close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="alert alert-warning" role="alert">
                  <h5>Emergency Contact</h5>
                  <ul>
                    <li>{emergencyContact.name}</li>
                    <li>{emergencyContact.phone}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelerCard;
