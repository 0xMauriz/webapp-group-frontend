import { BrowserRouter, Routes, Route } from "react-router-dom";
//importo bootstrap
//import layout
import MainLayout from "./layout/MainLayout";

//import pages
import Homepage from "./pages/Homepage";
import TravelDetail from "./pages/TravelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/travel/:travel_id" element={<TravelDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
