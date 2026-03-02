import { useState } from "react";

function NewTripSubmitForm({ onSubmit }) {
  // STATE del form
  // Qui salviamo i valori inseriti negli input

  const [formData, setFormData] = useState({
    id: "",
    tripName: "",
    tutor: "",
    destination: "",
    tripDuration: "",
    tripStart: "",
    tripEnd: "",
  });

  // FUNZIONE che aggiorna lo stato quando scrivo negli input
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // FUNZIONE che parte quando invio il form
  function handleSubmit(e) {
    e.preventDefault(); // evita il refresh della pagina
    console.log(formData);
    onSubmit(formData);
  }

  return (
    <div className="container  d-none d-lg-block">
      <div className="card m-5">
        <form
          onSubmit={handleSubmit}
          className="p-5 bg-dark text-light rounded"
        >
          <h2>Nuovo Viaggio</h2>

          <input
            type="text"
            name="tripName"
            placeholder="Nome viaggio"
            value={formData.tripName}
            onChange={handleChange}
            className="m-3"
          />

          <input
            type="date"
            name="tripStart"
            value={formData.tripStart}
            onChange={handleChange}
            className="m-3"
          />

          <input
            type="date"
            name="tripEnd"
            value={formData.tripEnd}
            onChange={handleChange}
            className="m-3"
          />

          <input
            type="text"
            name="tutor"
            placeholder="Nome accompagnatore"
            value={formData.tutor}
            onChange={handleChange}
            className="m-3"
          />

          <button type="submit" class="btn btn-outline-light">
            Crea
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTripSubmitForm;
