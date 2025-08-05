// import React from "react";
// import Header from "../elements/Header";
// import { Outlet } from "react-router-dom";
// import Container from "./Container";
// import SideBar from "../ui/SideBar";

// function AppLayout() {
//   return (
//     <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[16rem_1fr] lg:grid-rows-[auto_1fr]">
//       {/* Navbar */}
//       <header className="col-start-1 row-start-1 lg:col-start-2">
//         <Header />
//       </header>

//       {/* Sidebar (hidden on mobile) */}
//       <aside className="hidden border-r border-gray-200 shadow-sm lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:block">
//         <SideBar />
//       </aside>

//       {/* Main content */}
//       <main className="col-start-1 row-start-2 overflow-auto lg:col-start-2 lg:row-start-2">
//         <Container>
//           <Outlet />
//         </Container>
//       </main>
//     </div>
//   );
// }

// export default AppLayout;

import React from "react";
import Header from "../elements/Header";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import SideBar from "../ui/SideBar";

function AppLayout() {
  return (
    <div>
      <header className="">
        <Header />
      </header>

      <aside className="">
        <SideBar />
      </aside>

      <main className="col-start-1 row-start-2 overflow-auto lg:col-start-2 lg:row-start-2">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default AppLayout;
