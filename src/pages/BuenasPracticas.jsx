import React from 'react';
import './pages.css';

function BuenasPracticas() {
  return (
    <>
      <h2>✅ Buenas Prácticas en Desarrollo de Apps Usables</h2>
      <p>
        Aplicar buenas prácticas en el desarrollo de interfaces garantiza que los usuarios tengan una experiencia fluida, intuitiva y sin frustraciones. A continuación, exploramos tres principios clave.
      </p>

      <h3 className="titulo-usabilidad"> Evitar Sobrecarga Cognitiva</h3>
      <p>
        La sobrecarga cognitiva ocurre cuando un usuario se enfrenta a demasiada información o decisiones al mismo tiempo, lo que dificulta su capacidad de procesar la interfaz de manera efectiva.
      </p>
      <ul>
        <li> Usa <b>diseños simples y claros</b> con una jerarquía visual bien definida.</li>
        <li> Limita las opciones disponibles para evitar la "parálisis por análisis".</li>
        <li> Divide la información en secciones pequeñas y manejables.</li>
        <li> Usa iconos y elementos visuales reconocibles para facilitar la navegación.</li>
      </ul>

      <p><b>Ejemplo correcto:</b> Un formulario dividido en pasos en lugar de un solo formulario largo.</p>
      <pre className="code">
        {`<Stepper>
  <Step label="Información Personal" />
  <Step label="Detalles de Pago" />
  <Step label="Confirmación" />
</Stepper>`}
      </pre>

      <h3 className="titulo-usabilidad"> Minimizar Tiempo de Espera</h3>
      <p>
        Los usuarios esperan respuestas rápidas en las aplicaciones. Cualquier retraso sin retroalimentación puede generar frustración y abandono.
      </p>
      <ul>
        <li>✔ Optimiza el rendimiento para cargar solo los datos esenciales.</li>
        <li>✔ Usa indicadores de carga (<b>spinners, skeletons</b>) para dar retroalimentación visual.</li>
        <li>✔ Implementa **carga diferida** para elementos no esenciales.</li>
        <li>✔ Muestra un **porcentaje de progreso** en tareas largas.</li>
      </ul>

      <p><b>Ejemplo correcto:</b> Uso de Skeleton Loader en lugar de una pantalla en blanco.</p>
      <pre className="code">
        {`{isLoading ? <Skeleton height={40} width={200} /> : <button>Comprar Ahora</button>}`}
      </pre>

      <h3 className="titulo-usabilidad"> Uso Eficiente de Notificaciones y Alertas</h3>
      <p>
        Las notificaciones deben ser útiles y oportunas, sin ser intrusivas ni generar fatiga informativa.
      </p>
      <ul>
        <li>✔ Usa notificaciones <b>solo cuando sean necesarias</b>.</li>
        <li>✔ Permite al usuario personalizar qué notificaciones desea recibir.</li>
        <li>✔ Para errores, usa <b>mensajes claros</b> y soluciones rápidas.</li>
        <li>✔ Diferencia entre <b>alertas urgentes</b> (modal) y <b>mensajes informativos</b> (snackbar).</li>
      </ul>

      <p><b>Ejemplo correcto:</b> Un Snackbar en lugar de un alert bloqueante.</p>
      <pre className="code">
        {`<Snackbar message="Producto añadido al carrito" autoHideDuration={3000} />`}
      </pre>

      <p>
        Con estas prácticas, se logrará una interfaz más limpia, rápida y accesible para los usuarios, mejorando la retención y la satisfacción.
      </p>
    </>
  );
}

export default BuenasPracticas;