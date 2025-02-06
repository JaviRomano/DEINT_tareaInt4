import React from 'react';
import './pages.css';
import accesibilidadImg from '../img/accesibilidad.jpg';

function Accesibilidad() {
 
  return (
    <>
    <div>
      <div className="text-center">
              <img src={accesibilidadImg} alt="accesibilidad" className="img-fluid rounded"  style={{ maxWidth: '500px', width: '100%', display: 'block', margin: '0 auto', }}/>
            </div>
            <br></br>
      <h2>♿ Accesibilidad y Diseño Inclusivo</h2>
      <p>
        La accesibilidad es fundamental en el diseño de interfaces para garantizar que todas las personas, incluidas aquellas con discapacidades, puedan interactuar con facilidad en la aplicación.
      </p>

      <h3 className="titulo-usabilidad"> Uso de etiquetas <code className="code">accessibilityLabel</code></h3>
      <p>
        En React Native, la propiedad <code className="code">accessibilityLabel</code> permite proporcionar descripciones para elementos que los lectores de pantalla pueden interpretar.
      </p>
      <pre className="code">
        {`<TouchableOpacity accessibilityLabel="Botón para enviar formulario">`}
        {`\n  <Text>Enviar</Text>\n`}
        {`</TouchableOpacity>`}
      </pre>
        De este modo, describe la función del elemento, no solo su nombre, evita redundancias con texto visible en la pantalla.

      <h3 className="titulo-usabilidad"> Contrastes de Color Adecuados</h3>
      <p>
        Los contrastes de color son esenciales para garantizar la legibilidad de la información, especialmente para usuarios con daltonismo o visión reducida. <br></br>
        Unas buenas premisas son:
      </p>
      <ul>
        <li> Mantener una proporción de contraste de al menos <b className="code">4.5:1</b> para texto normal y <b className="code">3:1</b> para texto grande.</li>
        <li> Evitar combinaciones de colores visualmente poco agradables como rojo-verde o azul-morado.</li>
        <li> Ayudarse de herramientas como <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast Checker</a> - (web accesibility in mind).</li>
      </ul>

      <h3 className="titulo-usabilidad"> Fuentes Legibles y de Escalabilidad</h3>
      <p>
        El tamaño y tipo de fuente impactan directamente en la accesibilidad de la aplicación.
      </p>
      <ul>
        <li> Usar fuentes sin serifa como <code className="code">Arial</code> o <code className="code">Roboto</code> para mayor legibilidad.</li>
        <li> Asegurar un tamaño de fuente mínimo de <b className="code">16px</b> en pantallas móviles.</li>
        <li> Implementar escalabilidad dinámica con unidades relativas (<code className="code">em</code>, <code className="code">rem</code>).</li>
      </ul>

      <p>
        Adoptar estas prácticas mejorará la experiencia de usuario y garantizará el cumplimiento de estándares de accesibilidad como <a href="https://www.w3.org/WAI/standards-guidelines/wcag/es" target="_blank" className="code">WCAG</a> (Web Content Accessibility Guidelines) y <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" className="code">WAI-ARIA</a> (Web Accessibility Initiative – Accessible Rich Internet Applications).
      </p>
    </div>
    </>
  );
}

export default Accesibilidad;