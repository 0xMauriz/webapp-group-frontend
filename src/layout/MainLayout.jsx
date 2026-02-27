import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
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
      <main>
      
        <Outlet />
      </main>
    
      <footer className="bg-success mt-auto py-4">
        
        <div className="container">
          <ul className="list-unstyled text-white"> 
            <li>Assistenza</li>
            <li>Numeri Utili</li>
             <li className="fst-italic" > &copy; 2026 Viaggello</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
