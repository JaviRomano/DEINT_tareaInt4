import React from 'react';
import './pages.css';

function Navegacion() {
  return (
    <>
    <div className="page-container">
      <h2>🧭 Navegación y Flujo de Usuario</h2>
      <p>
        Una navegación bien estructurada es clave para una experiencia de usuario intuitiva. En React, utilizamos <b>React Router</b> en aplicaciones web y <b>React Navigation</b> en aplicaciones móviles con React Native.
      </p>

      <h3 className="titulo-usabilidad"> Implementación de React Navigation</h3>
      <p>
        React Navigation es la biblioteca más utilizada para manejar la navegación en <b>React Native</b>. Permite implementar diferentes tipos de navegación como Stack, Tabs y Drawer.
      </p>

      <h4 className="titulo-usabilidad"> Instalación de React Navigation</h4>
      <pre className="code">
        {`npm install @react-navigation/native
          npm install react-native-screens react-native-safe-area-context
          npm install @react-navigation/stack
          npm install @react-navigation/bottom-tabs
          npm install @react-navigation/drawer`}
      </pre>

      <h4 className="titulo-usabilidad"> Configuración en `App.js`</h4>
      <pre className="code">
        {`import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* Aquí irán las pantallas y el tipo de navegación */}
    </NavigationContainer>
  );
}`}
      </pre>
      <h3 className="titulo-usabilidad"> Tipos de Navegación</h3>
      <p>
        React Navigation ofrece varios métodos de navegación, cada uno con casos de uso específicos:
      </p>

      <h4 className="titulo-usabilidad"> Stack Navigation</h4>
      <p>
        Organiza las pantallas en una "pila" (stack), donde cada nueva pantalla se apila sobre la anterior.
      </p>
      <pre className="code">
        {`import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}`}
      </pre>

      <h4 className="titulo-usabilidad"> Bottom Tabs Navigation</h4>
      <p>
        Usa una barra de navegación en la parte inferior con pestañas para moverse entre pantallas.
      </p>
      <pre className="code">
        {`import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}`}
      </pre>

      <h4 className="titulo-usabilidad"> Drawer Navigation</h4>
      <p>
        Implementa un menú lateral deslizable para acceder a diferentes secciones de la aplicación.
      </p>
      <pre className="code">
        {`import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}`}
      </pre>
      <h3 className="code"> Buenas Prácticas en Navegación</h3>
      <ul>
        <li> Usa nombres de rutas descriptivos y fáciles de entender.</li>
        <li> Mantén la coherencia en la ubicación y diseño de los botones de navegación.</li>
        <li> Evita anidar demasiados niveles de navegación para no confundir al usuario.</li>
        <li> Indica claramente en qué pantalla se encuentra el usuario con indicadores visuales.</li>
        <li> Usa animaciones suaves para mejorar la experiencia de transición entre pantallas.</li>
      </ul>

      <p>
        Con estas recomendaciones, conseguiremos que la aplicación tenga una navegación fluida, intuitiva y accesible para los usuarios.
      </p>
      </div>
    </>    
  );
}

export default Navegacion;
