import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <button className="menu-toggle  btn btn-light me-3" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className="logo">📱 Guia para la usabilidad</div>
      </div>
      {menuOpen && (
        <nav className={"nav-menu open"}>
          <ul className="list-unstyled text-center">
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>📖 Introducción</NavLink></li>
            <li><NavLink to="/accesibilidad" onClick={() => setMenuOpen(false)}>♿ Accesibilidad</NavLink></li>
            <li><NavLink to="/interfaces" onClick={() => setMenuOpen(false)}>🎨 Diseño UI</NavLink></li>
            <li><NavLink to="/navegacion" onClick={() => setMenuOpen(false)}>🧭 Navegación</NavLink></li>
            <li><NavLink to="/buenasPracticas" onClick={() => setMenuOpen(false)}>✅ Buenas Prácticas</NavLink></li>
            <li><NavLink to="/testing" onClick={() => setMenuOpen(false)}>🛠️ Testing de Usabilidad</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;