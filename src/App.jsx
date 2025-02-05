import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Introduccion from "./pages/Introduccion";
import Accesibilidad from "./pages/Accesibilidad";
import Interfaces from "./pages/Interfaces";
import Navegacion from "./pages/Navegacion";
import BuenasPracticas from "./pages/BuenasPracticas";
import Testing from "./pages/Testing";
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="layout">
        <Aside />

        <section className="content">
          <Routes>
            <Route path="/" element={<Introduccion />} />
            <Route path="/accesibilidad" element={<Accesibilidad />} />
            <Route path="/interfaces" element={<Interfaces />} />
            <Route path="/navegacion" element={<Navegacion />} />
            <Route path="/buenasPracticas" element={<BuenasPracticas />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;