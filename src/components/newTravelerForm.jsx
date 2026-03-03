import { useState } from "react"


function NewTravelerForm() {

    const [travelersList, setTravelersList] = useState([]);

    const [traveler, setTraveler] = useState({
        trip_id: "",
        travelerName: "",
        travelerSurname: "",
        taxCode: "",
        email: "",
        phone: ""

    });

    function handleChange(e) {

        const { name, value } = e.target;

        setTraveler(travelerTemp => ({
            ...travelerTemp,
            [name]: value
        }))

    }

    function handleSubmit(e) {

        e.preventDefault();



        setTravelersList(travelerTemp => [...travelerTemp, traveler]);

        setTraveler({
            trip_id: "",
            travelerName: "",
            travelerSurname: "",
            taxCode: "",
            email: "",
            phone: ""
        });

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="trip-id" className="form-label">Immettere id del viaggio a cui il viaggiatore è associato: </label>
                    <input name="trip_id" type="text" className="form-control" id="trip-id" aria-describedby="emailHelp" value={traveler.trip_id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nome-viaggiatore" className="form-label">Immettere nome del viaggiatore: </label>
                    <input name="travelerName" type="text" className="form-control" id="traveler-name" value={traveler.travelerName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="traveler-surname">Immettere cognome del viaggiatore: </label>
                    <input name="travelerSurname" type="text" className="form-control" id="traveler-surname" value={traveler.travelerSurname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tax-code" className="form-label">Immettere codice fiscale del viaggiatore: </label>
                    <input name="taxCode" type="text" className="form-control" id="tax-code" aria-describedby="emailHelp" value={traveler.taxCode} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="traveler-email" className="form-label">Immettere indirizzo Mail: </label>
                    <input name="email" type="email" className="form-control" id="traveler-email" aria-describedby="emailHelp" value={traveler.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="traveler-phone" className="form-label">Immettere numero di telefono del viaggiatore: </label>
                    <input name="phone" type="text" className="form-control" id="traveler-phone" aria-describedby="emailHelp" value={traveler.phone} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>

        </>
    )
}

export default NewTravelerForm