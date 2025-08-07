import Header from "../elements/Header";
import { Outlet } from "react-router-dom";
import Container from "./Container";

function AppLayout() {
  return (
    <div>
      <header className="">
        <Header />
      </header>

      <main className="col-start-1 row-start-2 min-h-screen overflow-auto lg:col-start-2 lg:row-start-2">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default AppLayout;
