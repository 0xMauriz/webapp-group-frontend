import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function MainLayout() {
  return (
    <>
     <nav className="navbar bg-body-tertiary mb-4 d-flex justify-content-space-between">
      <div className="container">
        <h1>Viaggello</h1>
        
      </div>

     </nav>
      <main>
        
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
