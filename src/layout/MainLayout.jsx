import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <h1>Header Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
