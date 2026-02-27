import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Homepage from "./pages/Homepage";
import TravelDetail from "./pages/TravelDetail";

function App() {
<<<<<<< HEAD


=======
>>>>>>> 311f7785092c1f0378da6ff6248c51d3f5ad8aa5
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