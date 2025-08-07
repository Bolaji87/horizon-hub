import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/elements/Header";
import About from "./pages/About";
import Hero from "./pages/Hero";
import AppLayout from "./components/ui/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
