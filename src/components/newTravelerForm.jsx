import { useState } from "react"


function newTravelerForm() {

    const [travelers, setTravelers] = useState({
        trip_id: "",
        firstName: "",
        lastName: "",
        taxCode: "",
        email: "",
        phone: ""

    });



    return (
        <><form>
            <div className="mb-3">
                <label htmlFor="trip-id" className="form-label">Id a cui il viaggio è associato: </label>
                <input type="text" className="form-control" id="trip-id" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div><div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div><div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>

        </>
    )
}

export default newTravelerForm