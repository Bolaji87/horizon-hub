import Header from "../elements/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header className="">
        <Header />
      </header>

      <main className="min-h-screen overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
