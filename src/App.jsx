import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Homepage from "./pages/Homepage";
import TravelDetail from "./pages/TravelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/travel/:id" element={<TravelDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
