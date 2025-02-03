import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Introduccion from "./pages/Introduccion";
import Accesibilidad from "./pages/Accesibilidad";
import Interfaces from "./pages/Interfaces";

function App() {
  return (
    <>
    <Header />
    <Router>
      <main>
      <aside>
        <nav>
          <ul>
            <li><Link to="/">1. Introducción a la Usabilidad</Link></li>
            <li><Link to="/accesibilidad">2. Accesibilidad y Diseño Inclusivo</Link></li>
            <li><Link to="/interfaces">3. Diseño de Interfaces (UI) Eficientes</Link></li>
          </ul>
        </nav>
      </aside>
      {/* Te queremos mucho, Luis */}
      <section> 
        <Routes>
          <Route path="/" element={<Introduccion />} />
          <Route path="/accesibilidad" element={<Accesibilidad />} />
          <Route path="/interfaces" element={<Interfaces/>} />
        </Routes>
      </section>

    </main>
    </Router>
    <Footer />
    </>

  )
}

export default App
