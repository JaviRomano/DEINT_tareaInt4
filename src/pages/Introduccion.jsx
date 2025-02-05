import React from 'react'
import UXvsUI from '../components/UXvsUI';
import './pages.css';

function Introduccion() {
 
  return (
    <>
      <h2>Introducción a la Usabilidad</h2>
      <p> Entendemos el concepto de usabilidad como la facilidad con la que los usuarios pueden interactuar con un producto, sistema o aplicación para lograr sus objetivos de manera eficiente, efectiva y satisfactoria. En el contexto del diseño web y de aplicaciones, la usabilidad se centra en garantizar que la interfaz sea intuitiva, accesible y fácil de usar para los usuarios, independientemente de su nivel de experiencia.
        El objetivo principal consiste en mejorar la experiencia de usuario reduciendo la curva de aprendizaje y minimizar errores.
      </p>

      <h2>Principios básicos de usabilidad</h2>

      <p><span className="titulo-usabilidad">Facilidad de aprendizaje:</span> La interfaz debe ser intuitiva, permitiendo a los usuarios realizar tareas básicas rápidamente.</p>

      <p><span className="titulo-usabilidad">Eficiencia:</span> Una vez que los usuarios aprenden a usar la interfaz, deben poder realizar tareas de manera rápida y con el menor esfuerzo posible.</p>

      <p><span className="titulo-usabilidad">Memorabilidad:</span> Los usuarios deben poder recordar cómo usar la interfaz después de un tiempo sin interactuar con ella.</p>

      <p><span className="titulo-usabilidad">Prevención de errores:</span> La interfaz debe minimizar la posibilidad de errores y proporcionar mensajes claros para corregirlos cuando ocurran.</p>

      <p><span className="titulo-usabilidad">Satisfacción:</span> La experiencia debe ser agradable y satisfactoria para el usuario, fomentando su confianza y lealtad.</p>

      <p><span className="titulo-usabilidad">Accesibilidad:</span> La interfaz debe ser usable por personas con diferentes capacidades, incluyendo aquellas con discapacidades.</p>

      <UXvsUI /> { }
    </>
  );
}

export default Introduccion;