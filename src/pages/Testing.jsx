import React from 'react';

function Testing() {
  return (
    <div>
      <h2>🛠️ Testing de Usabilidad en React.js</h2>
      <p>
        Realizar pruebas de usabilidad en nuestras aplicaciones es clave para detectar problemas, mejorar la experiencia del usuario y garantizar accesibilidad. A continuación, exploramos diferentes métodos y herramientas para evaluar la usabilidad en aplicaciones desarrolladas con React.js.
      </p>

      <h3 className="titulo-usabilidad"> Pruebas con Usuarios</h3>
      <p>
        Las pruebas con usuarios permiten observar el comportamiento real de las personas al interactuar con la aplicación, identificando dificultades y áreas de mejora.
      </p>
      <ul>
        <li> Selecciona un grupo representativo de usuarios.</li>
        <li> Define tareas específicas para que los usuarios intenten completar.</li>
        <li> Observa cómo navegan por la interfaz y dónde encuentran problemas.</li>
        <li> Usa herramientas como <b className="code">Hotjar</b> o <b className="code">FullStory</b> para grabar sesiones.</li>
        <li> Recoge feedback con encuestas de satisfacción como <b>Google Forms</b> o <b>Typeform</b>.</li>
      </ul>

      <h3 className="titulo-usabilidad"> Herramientas para Evaluar Accesibilidad</h3>
      <p>
        Es importante asegurarse de que la aplicación sea accesible para todos los usuarios, incluidas personas con discapacidades visuales, motoras o cognitivas.
      </p>
      <ul>
        <li> <b className="code">Lighthouse</b> – Evalúa accesibilidad, rendimiento y SEO en Chrome DevTools.</li>
        <li> <b className="code">axe DevTools</b> – Detecta errores de accesibilidad directamente en la app.</li>
        <li> <b className="code">WAVE</b> – Analiza la accesibilidad web e identifica áreas problemáticas.</li>
        <li> <b className="code">NVDA (NonVisual Desktop Access)</b> – Prueba compatibilidad con lectores de pantalla.</li>
      </ul>

      <p><b>Ejemplo de uso de Lighthouse en Chrome DevTools:</b></p>
      <pre className="code">
        {`1. Abre DevTools (F12) > Pestaña "Lighthouse".`}
        {`\n2. Selecciona "Accessibility" y haz clic en "Generate Report".`}
        {`\n3. Revisa los errores y sigue las recomendaciones.`}
      </pre>

      <h3 className="titulo-usabilidad"> Test A/B en Diseño de Apps</h3>
      <p>
        Las pruebas A/B permiten comparar dos versiones de una interfaz para determinar cuál funciona mejor en términos de conversión y usabilidad.
      </p>
      <ul>
        <li> Define una métrica clara (ejemplo: aumento en clics o reducción en el tiempo de búsqueda).</li>
        <li> Crea dos versiones de la UI con diferencias específicas (ejemplo: cambio de color en un botón).</li>
        <li> Muestra la versión A a un grupo de usuarios y la versión B a otro grupo.</li>
        <li> Analiza los resultados y determina cuál diseño mejora la experiencia.</li>
      </ul>

      <p><b>Ejemplo de un test A/B con botones:</b></p>
      <pre className="code">
        {`Grupo A: <button style={{ backgroundColor: 'blue' }}>Comprar</button>`}
        {`\nGrupo B: <button style={{ backgroundColor: 'green' }}>Comprar</button>`}
      </pre>

      <p>
        Implementando estos métodos, podemos optimizar nuestras aplicaciones para garantizar una mejor experiencia de usuario y accesibilidad.
      </p>
    </div>
  );
}

export default Testing;