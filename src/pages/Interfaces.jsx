import React from 'react';
import './pages.css';

function Interfaces() {
  return (
    <>
      <h2>🎨 Diseño de Interfaces (UI) Eficientes</h2>
      <p>
        Un buen diseño de UI no solo hace que la aplicación sea atractiva, sino que mejora la usabilidad y la experiencia del usuario. A continuación, exploramos algunos de los principios clave.
      </p>

      <h3 className="titulo-usabilidad"> Botones y Tamaño Táctil Recomendado</h3>
      <p>
        Los botones son elementos clave en la interacción. Deben ser lo suficientemente grandes para ser pulsados con facilidad en dispositivos táctiles.
      </p>
      <ul>
        <li> El tamaño mínimo recomendado para un botón es de <b className="code">48x48 píxeles</b> (WCAG recomienda un área táctil de al menos 9mm).</li>
        <li> Espaciado mínimo entre botones: <b className="code">8px</b> para evitar toques accidentales.</li>
        <li> Los botones principales deben ser más grandes y llamativos que los secundarios.</li>
        <li> Usa colores contrastantes y etiquetas claras en los botones.</li>
      </ul>
      <p>
        <b>Ejemplo correcto:</b> Un botón grande y bien diferenciado con una etiqueta clara.
      </p>
      <pre className="code">
        {`<button style={{
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: '#fff'
        }}>
          Comprar ahora
        </button>`}
      </pre>

      <h3 className="titulo-usabilidad"> Espaciado y Alineación</h3>
      <p>
        Un buen uso del espaciado y la alineación mejora la legibilidad y la navegación en la interfaz.
      </p>
      <ul>
        <li> Mantén una distancia mínima de <b className="code">8px</b> entre elementos relacionados.</li>
        <li> Usa <b className="code">alineación consistente</b> (alineación a la izquierda o centrada).</li>
        <li> Utiliza un <b className="code">espaciado uniforme</b> en los márgenes y paddings.</li>
        <li> Separa visualmente los elementos con espacios en lugar de líneas.</li>
      </ul>
      <p>
        <b>Ejemplo correcto:</b> Uso de `gap` en CSS para espaciar elementos dentro de un contenedor.
      </p>
      <pre className="code">
        {`.container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }`}
      </pre>

      <h3 className="titulo-usabilidad"> Animaciones y Retroalimentación Visual</h3>
      <p>
        Las animaciones sutiles y la retroalimentación visual mejoran la percepción de la interfaz y hacen que la experiencia sea más fluida.
      </p>
      <ul>
        <li> Usa animaciones para indicar cambios de estado (<b className="code">hover, focus, loading</b>).</li>
        <li> Proporciona retroalimentación visual cuando un usuario interactúa con un botón.</li>
        <li> Evita animaciones excesivas que puedan distraer o ralentizar la UI.</li>
      </ul>
      <p>
        <b>Ejemplo correcto:</b> Un botón con efecto de animación al pasar el mouse (<b className="code">hoover</b>).
      </p>
      <pre className="code">
        {`button {
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }`}
      </pre>

      <p>
        Implementar estas prácticas garantizará una interfaz visualmente atractiva, accesible y eficiente para los usuarios.
      </p>
    </>
  );
}

export default Interfaces;