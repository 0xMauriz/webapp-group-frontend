import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      <nav className="navbar bg-success-subtle mb-4">
        <div className="container">
          <Link to="/" className="text-decoration-none text-success">
            <h1 className="h3 m-0 fw-bold">Viaggello</h1>
          </Link>
          <img 
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
            alt="Profilo" 
            className="rounded-circle border border-white shadow-sm"
            style={{ width: "45px", height: "45px", objectFit: "cover" }} 
          />
        </div>
      </nav>


      <main className="flex-grow-1 container">
        <Outlet />
      </main>

     
      <footer className="bg-success py-4">
        <div className="container">
          <ul className="list-unstyled text-white mb-0"> 
            <li>Assistenza</li>
            <li>Numeri Utili</li>
            <li className="fst-italic">&copy; 2026 Viaggello</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;