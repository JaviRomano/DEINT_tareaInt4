import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Introduccion from "./pages/Introduccion";
import Accesibilidad from "./pages/Accesibilidad";
import Interfaces from "./pages/Interfaces";
import Navegacion from "./pages/Navegacion";
import BuenasPracticas from "./pages/BuenasPracticas";
import Testing from "./pages/Testing";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header />
      <main className="content">
          <Routes>
            <Route path="/" element={<Introduccion />} />
            <Route path="/accesibilidad" element={<Accesibilidad />} />
            <Route path="/interfaces" element={<Interfaces />} />
            <Route path="/navegacion" element={<Navegacion />} />
            <Route path="/buenasPracticas" element={<BuenasPracticas />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;