import { useState } from "react";

function newTripSubmitForm({ onSubmit }) {
    // STATE del form
  // Qui salviamo i valori inseriti negli input
    const [formData, setFormData] = useState({
        id: "",
        tripName: "",
        tutor: "",
        destination: "",
        tripDuration: "",
        tripStart: "",
        tripEnd: ""
    });
    // FUNZIONE che aggiorna lo stato quando scrivo negli input
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    // FUNZIONE che parte quando invio il form
    function handleSubmit(e) {
        e.preventDefault(); // evita il refresh della pagina
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Nuovo Viaggio</h2>

            <input
                type="text"
                name="tripName"
                placeholder="Nome viaggio"
                value={formData.tripName}
                onChange={handleChange}
            />

            <input
                type="date"
                name="tripStart"
                value={formData.tripStart}
                onChange={handleChange}
            />

            <input
                type="date"
                name="tripEnd"
                value={formData.tripEnd}
                onChange={handleChange}
            />

            <input
                type="text"
                name="tutore"
                placeholder="Nome accompagnatore"
                value={formData.tutore}
                onChange={handleChange}
            />

            <button type="submit">Crea</button>
        </form>
    );
}

export default newTripSubmitForm;