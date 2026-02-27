import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
     <nav className="navbar bg-body-tertiary mb-4 d-flex justify-content-center">
      <h1>Documentello di Viaggello</h1>
     </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
