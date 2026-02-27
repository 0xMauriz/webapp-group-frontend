import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/travel/:id" element={<TravelDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
