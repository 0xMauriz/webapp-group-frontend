function Homepage() {
  return (
    <>
      <h1>prova homepage</h1>
      <p>
        <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/286x180"
          className="card-img-top"
          alt="Immagine esempio"
        />

        <div className="card-body">
          <h5 className="card-title">Titolo Card</h5>
          <p className="card-text">
            Un breve testo di esempio per riempire il contenuto della card.
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Primo elemento</li>
          <li className="list-group-item">Secondo elemento</li>
          <li className="list-group-item">Terzo elemento</li>
        </ul>

        <div className="card-body">
          <a href="/" className="card-link">Link 1</a>
          <a href="/" className="card-link">Link 2</a>
        </div>
      </div>
      </p>
    </>
  );
}

export default Homepage;
