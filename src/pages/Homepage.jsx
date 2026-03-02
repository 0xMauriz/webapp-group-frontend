import tripData from "../data/tripData";
import TravelCardData from "../components/TravelCardData";
import NewTripSubmitForm from "../components/newTripSubmitForm";

function Homepage() {
  return (
    <>
      <TravelCardData />
      <NewTripSubmitForm />
    </>
  );
}

export default Homepage;
