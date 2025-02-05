import React from 'react'
import { NavLink } from 'react-router-dom';
import './Aside.css';

function Aside() {
  return (
    <aside className="sidebar">
      <nav aria-label="Menú principal">
        <h2 className="menu-title">Menú</h2>
        <ul>
          <li><NavLink to="/">📖 Introducción</NavLink></li>
          <li><NavLink to="/accesibilidad">♿ Accesibilidad</NavLink></li>
          <li><NavLink to="/interfaces">🎨 Diseño UI</NavLink></li>
          <li><NavLink to="/navegacion">🧭 Navegación y Flujo de Usuario</NavLink></li>
          <li><NavLink to="/buenasPracticas">✅ Buenas Prácticas en Desarrollo</NavLink></li>
          <li><NavLink to="/testing">🛠️ Testing de Usabilidad en React.js</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside